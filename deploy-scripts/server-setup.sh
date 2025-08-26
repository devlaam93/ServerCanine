#!/bin/bash

# ServerCanine DigitalOcean Server Setup Script
# Run this script on your DigitalOcean droplet as root

echo "🚀 Starting ServerCanine server setup..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install nginx
echo "📦 Installing nginx..."
apt install nginx -y
systemctl start nginx
systemctl enable nginx

# Install Git
echo "📦 Installing Git..."
apt install git -y

# Install PM2
echo "📦 Installing PM2..."
npm install -g pm2

# Install other useful tools
echo "📦 Installing additional tools..."
apt install htop curl wget unzip certbot python3-certbot-nginx -y

# Create project directory
echo "📁 Creating project directory..."
mkdir -p /var/www/servercanine
mkdir -p /root/backups

# Set up firewall
echo "🔒 Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Create nginx configuration for ServerCanine
echo "⚙️ Creating nginx configuration..."
cat > /etc/nginx/sites-available/servercanine << 'EOF'
server {
    listen 80;
    server_name servercanine.com www.servercanine.com;
    
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
EOF

# Enable the site
echo "🔗 Enabling ServerCanine site..."
ln -s /etc/nginx/sites-available/servercanine /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    systemctl restart nginx
else
    echo "❌ Nginx configuration has errors"
    exit 1
fi

# Create backup script
echo "💾 Creating backup script..."
cat > /root/backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /root/backups/servercanine_$DATE.tar.gz /var/www/servercanine
# Keep only last 7 backups
find /root/backups -name "servercanine_*.tar.gz" -mtime +7 -delete
echo "Backup completed: servercanine_$DATE.tar.gz"
EOF

chmod +x /root/backup.sh

# Create deployment script template
echo "🚀 Creating deployment script..."
cat > /var/www/servercanine/deploy.sh << 'EOF'
#!/bin/bash
echo "🚀 Starting deployment..."

cd /var/www/servercanine

# Pull latest changes (if using git)
if [ -d ".git" ]; then
    echo "📥 Pulling latest changes..."
    git pull origin main
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Set proper permissions
echo "🔒 Setting permissions..."
chown -R www-data:www-data /var/www/servercanine

# Restart nginx
echo "🔄 Restarting nginx..."
systemctl restart nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be accessible at your domain"
EOF

chmod +x /var/www/servercanine/deploy.sh

# Install fail2ban for security
echo "🛡️ Installing fail2ban..."
apt install fail2ban -y
systemctl enable fail2ban
systemctl start fail2ban

echo ""
echo "🎉 Server setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Upload your ServerCanine project files to /var/www/servercanine"
echo "2. Edit /etc/nginx/sites-available/servercanine and replace 'servercanine.com' with your actual domain"
echo "3. Run: cd /var/www/servercanine && npm install && npm run build"
echo "4. Run: systemctl restart nginx"
echo "5. Configure your Cloudflare DNS settings"
echo ""
echo "Useful commands:"
echo "- Check nginx status: systemctl status nginx"
echo "- View nginx logs: tail -f /var/log/nginx/error.log"
echo "- Deploy updates: /var/www/servercanine/deploy.sh"
echo "- Create backup: /root/backup.sh"
echo ""
