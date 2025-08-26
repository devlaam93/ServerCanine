#!/bin/bash

# ServerCanine Project Upload Script
# Run this script from your local machine to upload the project to DigitalOcean

# Configuration - Update these variables
SERVER_IP="167.99.183.117"
SERVER_USER="root"
LOCAL_PROJECT_PATH="."
REMOTE_PROJECT_PATH="/var/www/servercanine"

echo "🚀 Starting ServerCanine project upload..."

# Check if rsync is available
if ! command -v rsync &> /dev/null; then
    echo "❌ rsync is not installed. Please install rsync first."
    echo "On Ubuntu/Debian: sudo apt install rsync"
    echo "On macOS: brew install rsync"
    echo "On Windows: Use WSL or install rsync via Cygwin"
    exit 1
fi

# Exclude files that shouldn't be uploaded
echo "📦 Uploading project files..."
rsync -avz --progress \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.env' \
    --exclude '.env.local' \
    --exclude '.DS_Store' \
    --exclude 'Thumbs.db' \
    --exclude '*.log' \
    --exclude 'deploy-scripts' \
    "$LOCAL_PROJECT_PATH/" "$SERVER_USER@$SERVER_IP:$REMOTE_PROJECT_PATH/"

if [ $? -eq 0 ]; then
    echo "✅ Project files uploaded successfully!"
    
    echo "🔨 Building project on server..."
    ssh "$SERVER_USER@$SERVER_IP" << 'EOF'
cd /var/www/servercanine
npm install
npm run build
chown -R www-data:www-data /var/www/servercanine
systemctl restart nginx
EOF
    
    if [ $? -eq 0 ]; then
        echo "✅ Project built and deployed successfully!"
        echo "🌐 Your site should now be accessible at your domain"
    else
        echo "❌ Error building project on server"
        exit 1
    fi
else
    echo "❌ Error uploading project files"
    exit 1
fi

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "Next steps:"
echo "1. Update your domain in nginx config: /etc/nginx/sites-available/servercanine"
echo "2. Configure Cloudflare DNS settings"
echo "3. Test your website"
echo ""
