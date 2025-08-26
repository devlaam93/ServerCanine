# ServerCanine DigitalOcean Deployment Guide

## Prerequisites
- DigitalOcean droplet with Ubuntu 20.04+ LTS
- Root access to the server
- Cloudflare account with domain management
- Namecheap domain pointing to Cloudflare nameservers

## Step 1: Server Setup and Dependencies

### 1.1 Connect to your DigitalOcean droplet
```bash
ssh root@your-server-ip
```

### 1.2 Update system packages
```bash
apt update && apt upgrade -y
```

### 1.3 Install Node.js 18+ and npm
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs
```

### 1.4 Install nginx
```bash
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

### 1.5 Install Git
```bash
apt install git -y
```

### 1.6 Install PM2 (Process Manager)
```bash
npm install -g pm2
```

## Step 2: Deploy the Application

### 2.1 Clone your project (or upload files)
```bash
cd /var/www
git clone https://github.com/your-username/server-avatar-clone-main.git servercanine
# OR upload your project files to /var/www/servercanine
```

### 2.2 Navigate to project directory
```bash
cd /var/www/servercanine
```

### 2.3 Install dependencies
```bash
npm install
```

### 2.4 Build the project for production
```bash
npm run build
```

## Step 3: Configure Nginx

### 3.1 Create nginx configuration
```bash
nano /etc/nginx/sites-available/servercanine
```

### 3.2 Add the following configuration:
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

### 3.3 Enable the site
```bash
ln -s /etc/nginx/sites-available/servercanine /etc/nginx/sites-enabled/
```

### 3.4 Remove default nginx site
```bash
rm /etc/nginx/sites-enabled/default
```

### 3.5 Test nginx configuration
```bash
nginx -t
```

### 3.6 Restart nginx
```bash
systemctl restart nginx
```

## Step 4: Configure Cloudflare

### 4.1 Add DNS Records in Cloudflare
1. Log into your Cloudflare dashboard
2. Select your domain
3. Go to DNS settings
4. Add these records:

**A Record:**
- Type: A
- Name: @ (or your domain)
- IPv4 address: your-digitalocean-droplet-ip
- Proxy status: Proxied (orange cloud)

**CNAME Record:**
- Type: CNAME
- Name: www
- Target: your-domain.com
- Proxy status: Proxied (orange cloud)

### 4.2 Configure SSL/TLS in Cloudflare
1. Go to SSL/TLS → Overview
2. Set encryption mode to "Full (strict)"
3. Go to SSL/TLS → Edge Certificates
4. Enable "Always Use HTTPS"
5. Enable "HTTP Strict Transport Security (HSTS)"

### 4.3 Configure Security Settings
1. Go to Security → Settings
2. Set Security Level to "Medium" or "High"
3. Enable "Bot Fight Mode"
4. Go to Speed → Optimization
5. Enable "Auto Minify" for HTML, CSS, JS

## Step 5: Configure Namecheap Domain

### 5.1 Point domain to Cloudflare
1. Log into Namecheap account
2. Go to Domain List → Manage
3. Change nameservers to Cloudflare's:
   - `ava.ns.cloudflare.com`
   - `carter.ns.cloudflare.com`
   (Use the specific nameservers provided by Cloudflare)

## Step 6: Install SSL Certificate (Optional - Cloudflare handles this)

If you want origin certificates for extra security:

### 6.1 Install Certbot
```bash
apt install certbot python3-certbot-nginx -y
```

### 6.2 Get SSL certificate
```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 7: Set up Automatic Deployment (Optional)

### 7.1 Create deployment script
```bash
nano /var/www/servercanine/deploy.sh
```

### 7.2 Add deployment script content:
```bash
#!/bin/bash
cd /var/www/servercanine
git pull origin main
npm install
npm run build
systemctl restart nginx
echo "Deployment completed successfully!"
```

### 7.3 Make script executable
```bash
chmod +x /var/www/servercanine/deploy.sh
```

## Step 8: Configure Firewall

### 8.1 Install and configure UFW
```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

## Step 9: Set up Monitoring (Optional)

### 9.1 Install htop for monitoring
```bash
apt install htop -y
```

### 9.2 Set up log rotation
```bash
nano /etc/logrotate.d/nginx
```

## Step 10: Final Verification

### 10.1 Check if site is accessible
1. Visit your domain in a browser
2. Check HTTPS is working
3. Verify all pages load correctly
4. Test form submissions
5. Check mobile responsiveness

### 10.2 Performance testing
1. Use Google PageSpeed Insights
2. Test with GTmetrix
3. Verify Cloudflare caching is working

## Troubleshooting

### Common Issues:

1. **502 Bad Gateway**: Check nginx error logs
   ```bash
   tail -f /var/log/nginx/error.log
   ```

2. **Permission issues**: Fix ownership
   ```bash
   chown -R www-data:www-data /var/www/servercanine
   ```

3. **DNS not propagating**: Wait 24-48 hours or use DNS checker tools

4. **SSL issues**: Check Cloudflare SSL settings and origin certificates

### Useful Commands:
```bash
# Check nginx status
systemctl status nginx

# Restart nginx
systemctl restart nginx

# Check disk space
df -h

# Check memory usage
free -h

# View nginx access logs
tail -f /var/log/nginx/access.log

# View nginx error logs
tail -f /var/log/nginx/error.log
```

## Security Recommendations

1. **Change SSH port** (optional but recommended)
2. **Disable root login** and create a sudo user
3. **Install fail2ban** for brute force protection
4. **Regular security updates**
5. **Monitor server logs**
6. **Backup your data regularly**

## Backup Strategy

### 6.1 Create backup script
```bash
nano /root/backup.sh
```

### 6.2 Add backup content:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /root/backups/servercanine_$DATE.tar.gz /var/www/servercanine
# Keep only last 7 backups
find /root/backups -name "servercanine_*.tar.gz" -mtime +7 -delete
```

### 6.3 Set up cron job for daily backups
```bash
crontab -e
# Add this line for daily backup at 2 AM
0 2 * * * /root/backup.sh
```

Your ServerCanine website should now be live and accessible via your domain with Cloudflare protection and SSL encryption!
