# Install ServerCanine from GitHub to DigitalOcean Server

## Complete Installation Guide: GitHub → DigitalOcean Server

### Prerequisites
- DigitalOcean droplet (Ubuntu 20.04+ LTS)
- Root access to your server
- Your GitHub repository: https://github.com/devlaam93/ServerCanine.git

## Step 1: Connect to Your DigitalOcean Server

```bash
ssh root@your-server-ip
```

## Step 2: Run the Automated Server Setup

### Option A: Direct Download and Run (Recommended)
```bash
# Download the server setup script directly from GitHub
wget https://raw.githubusercontent.com/devlaam93/ServerCanine/main/deploy-scripts/server-setup.sh

# Make it executable
chmod +x server-setup.sh

# Run the setup script
./server-setup.sh
```

### Option B: Manual Installation
If the direct download doesn't work, install dependencies manually:

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install nginx
apt install nginx -y
systemctl start nginx
systemctl enable nginx

# Install Git and other tools
apt install git htop curl wget unzip certbot python3-certbot-nginx fail2ban -y

# Set up firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Create project directory
mkdir -p /var/www/servercanine
mkdir -p /root/backups
```

## Step 3: Clone Your Project from GitHub

```bash
# Navigate to web directory
cd /var/www

# Clone your ServerCanine repository
git clone https://github.com/devlaam93/ServerCanine.git servercanine

# Navigate to project directory
cd /var/www/servercanine

# Verify files are there
ls -la
```

## Step 4: Install Dependencies and Build

```bash
# Install npm dependencies
npm install

# Build the project for production
npm run build

# Verify build was successful
ls -la dist/
```

## Step 5: Configure Nginx

### Create Nginx Configuration
```bash
# Create nginx site configuration
nano /etc/nginx/sites-available/servercanine
```

### Add this configuration (replace your-domain.com with your actual domain):
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/servercanine/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle favicon
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }
    
    # Handle robots.txt
    location = /robots.txt {
        log_not_found off;
        access_log off;
    }
}
```

### Enable the Site
```bash
# Enable the site
ln -s /etc/nginx/sites-available/servercanine /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# If test passes, restart nginx
systemctl restart nginx
```

## Step 6: Set Proper Permissions

```bash
# Set ownership to www-data
chown -R www-data:www-data /var/www/servercanine

# Set proper permissions
find /var/www/servercanine -type d -exec chmod 755 {} \;
find /var/www/servercanine -type f -exec chmod 644 {} \;
```

## Step 7: Configure Your Domain (Cloudflare + Namecheap)

### Cloudflare DNS Settings:
1. **Log into Cloudflare dashboard**
2. **Add A record:**
   - Type: A
   - Name: @
   - IPv4 address: your-digitalocean-server-ip
   - Proxy status: Proxied (orange cloud)

3. **Add CNAME record:**
   - Type: CNAME
   - Name: www
   - Target: your-domain.com
   - Proxy status: Proxied (orange cloud)

### Namecheap Settings:
1. **Log into Namecheap**
2. **Go to Domain List → Manage**
3. **Set nameservers to Cloudflare's nameservers**

### Update Nginx with Your Domain:
```bash
# Edit nginx configuration
nano /etc/nginx/sites-available/servercanine

# Replace 'your-domain.com' with your actual domain
# Save and restart nginx
systemctl restart nginx
```

## Step 8: Set Up SSL (Optional - Cloudflare handles this)

If you want origin certificates:
```bash
# Install SSL certificate
certbot --nginx -d your-domain.com -d www.your-domain.com

# Set up auto-renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -
```

## Step 9: Set Up Monitoring and Backups

### Create Backup Script
```bash
# Create backup script
cat > /root/backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /root/backups/servercanine_$DATE.tar.gz /var/www/servercanine
# Keep only last 7 backups
find /root/backups -name "servercanine_*.tar.gz" -mtime +7 -delete
echo "Backup completed: servercanine_$DATE.tar.gz"
EOF

chmod +x /root/backup.sh
```

### Set Up Cron Jobs
```bash
# Edit crontab
crontab -e

# Add these lines:
# Daily backup at 2 AM
0 2 * * * /root/backup.sh

# Weekly log cleanup at 3 AM on Sundays
0 3 * * 0 find /var/log -name "*.log" -mtime +30 -delete
```

## Step 10: Test Your Installation

### Check Services
```bash
# Check nginx status
systemctl status nginx

# Check if website files exist
ls -la /var/www/servercanine/dist/

# Test local response
curl -I http://localhost

# Check nginx logs
tail -f /var/log/nginx/error.log
```

### Test Website
1. **Visit your domain in a browser**
2. **Check HTTPS is working (via Cloudflare)**
3. **Test all pages and forms**
4. **Verify mobile responsiveness**

## Step 11: Future Updates

### To update your website:
```bash
# Navigate to project directory
cd /var/www/servercanine

# Pull latest changes from GitHub
git pull origin main

# Install any new dependencies
npm install

# Rebuild the project
npm run build

# Set permissions
chown -R www-data:www-data /var/www/servercanine

# Restart nginx
systemctl restart nginx
```

## Troubleshooting

### Common Issues:

1. **502 Bad Gateway:**
   ```bash
   # Check nginx logs
   tail -f /var/log/nginx/error.log
   
   # Check if build directory exists
   ls -la /var/www/servercanine/dist/
   
   # Rebuild if necessary
   cd /var/www/servercanine && npm run build
   ```

2. **Permission Issues:**
   ```bash
   chown -R www-data:www-data /var/www/servercanine
   ```

3. **Git Clone Issues:**
   ```bash
   # If git clone fails, try:
   cd /var/www
   rm -rf servercanine
   git clone https://github.com/devlaam93/ServerCanine.git servercanine
   ```

4. **Build Failures:**
   ```bash
   # Check Node.js version
   node --version
   npm --version
   
   # Clear npm cache and reinstall
   cd /var/www/servercanine
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

## Quick Installation Summary

```bash
# 1. Connect to server
ssh root@your-server-ip

# 2. Run setup script
wget https://raw.githubusercontent.com/devlaam93/ServerCanine/main/deploy-scripts/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh

# 3. Clone project
cd /var/www
git clone https://github.com/devlaam93/ServerCanine.git servercanine

# 4. Build project
cd /var/www/servercanine
npm install
npm run build

# 5. Set permissions
chown -R www-data:www-data /var/www/servercanine

# 6. Update domain in nginx config
nano /etc/nginx/sites-available/servercanine
systemctl restart nginx

# 7. Configure Cloudflare DNS
# 8. Test your website!
```

Your ServerCanine website should now be live and accessible via your domain!

## Support Files Available:
- Complete deployment guide: `DIGITALOCEAN_DEPLOYMENT_GUIDE.md`
- Script execution help: `HOW_TO_RUN_SCRIPTS_ON_SERVER.md`
- Monitoring guide: `deploy-scripts/monitoring-maintenance.md`
