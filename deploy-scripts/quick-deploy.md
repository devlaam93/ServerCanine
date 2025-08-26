# Quick Deployment Guide for ServerCanine

## Prerequisites
- DigitalOcean droplet (Ubuntu 20.04+ LTS)
- Cloudflare account
- Namecheap domain
- Your domain's nameservers pointed to Cloudflare

## Step 1: Prepare Your Server

1. **Connect to your DigitalOcean droplet:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Upload and run the server setup script:**
   ```bash
   # Upload the server-setup.sh script to your server
   # Then run:
   chmod +x server-setup.sh
   ./server-setup.sh
   ```

## Step 2: Upload Your Project

### Option A: Using the upload script (Recommended)
1. **Edit the upload script on your local machine:**
   ```bash
   nano deploy-scripts/upload-project.sh
   ```
   
2. **Update these variables:**
   ```bash
   SERVER_IP="your-actual-server-ip"
   SERVER_USER="root"
   ```

3. **Run the upload script:**
   ```bash
   chmod +x deploy-scripts/upload-project.sh
   ./deploy-scripts/upload-project.sh
   ```

### Option B: Manual upload using SCP
```bash
# From your local project directory
scp -r . root@your-server-ip:/var/www/servercanine/
```

## Step 3: Configure Your Domain

1. **Edit nginx configuration on server:**
   ```bash
   nano /etc/nginx/sites-available/servercanine
   ```
   
2. **Replace `your-domain.com` with your actual domain**

3. **Restart nginx:**
   ```bash
   systemctl restart nginx
   ```

## Step 4: Configure Cloudflare DNS

1. **Log into Cloudflare dashboard**
2. **Add A record:**
   - Type: A
   - Name: @
   - IPv4 address: your-server-ip
   - Proxy status: Proxied (orange cloud)

3. **Add CNAME record:**
   - Type: CNAME
   - Name: www
   - Target: your-domain.com
   - Proxy status: Proxied (orange cloud)

## Step 5: Configure SSL and Security

1. **In Cloudflare SSL/TLS settings:**
   - Set encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"
   - Enable "HTTP Strict Transport Security (HSTS)"

2. **In Security settings:**
   - Set Security Level to "Medium" or "High"
   - Enable "Bot Fight Mode"

## Step 6: Test Your Deployment

1. **Visit your domain in a browser**
2. **Check HTTPS is working**
3. **Test all pages and forms**
4. **Verify mobile responsiveness**

## Troubleshooting

### Common Issues:

1. **502 Bad Gateway:**
   ```bash
   # Check nginx logs
   tail -f /var/log/nginx/error.log
   
   # Check if build directory exists
   ls -la /var/www/servercanine/dist/
   
   # Rebuild if necessary
   cd /var/www/servercanine
   npm run build
   ```

2. **Permission Issues:**
   ```bash
   chown -R www-data:www-data /var/www/servercanine
   ```

3. **DNS Not Resolving:**
   - Wait 24-48 hours for DNS propagation
   - Use DNS checker tools online
   - Verify Cloudflare DNS settings

## Useful Commands

```bash
# Check nginx status
systemctl status nginx

# Restart nginx
systemctl restart nginx

# View nginx logs
tail -f /var/log/nginx/error.log

# Check disk space
df -h

# Check memory usage
free -h

# Deploy updates
/var/www/servercanine/deploy.sh

# Create backup
/root/backup.sh
```

## Security Checklist

- [ ] Firewall configured (UFW)
- [ ] Fail2ban installed
- [ ] SSL/HTTPS enabled
- [ ] Security headers configured
- [ ] Regular backups scheduled
- [ ] Server monitoring in place

Your ServerCanine website should now be live and accessible!
