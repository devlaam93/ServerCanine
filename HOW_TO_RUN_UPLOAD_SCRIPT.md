# How to Run upload-project.sh Script

## Prerequisites
- Your DigitalOcean server must be set up (run server-setup.sh first)
- You need your server IP address
- rsync must be installed on your local machine

## Step 1: Edit the Upload Script

First, you need to update the script with your actual server IP:

```bash
# Open the upload script for editing
nano deploy-scripts/upload-project.sh
```

**Change these lines:**
```bash
# FROM:
SERVER_IP="your-server-ip"
SERVER_USER="root"

# TO: (replace with your actual IP)
SERVER_IP="123.456.789.012"  # Your actual DigitalOcean IP
SERVER_USER="root"
```

## Step 2: Make the Script Executable

```bash
chmod +x deploy-scripts/upload-project.sh
```

## Step 3: Run the Upload Script

```bash
./deploy-scripts/upload-project.sh
```

## What the Script Does

The upload script will:
1. ✅ Check if rsync is installed
2. ✅ Upload your project files to `/var/www/servercanine/`
3. ✅ Exclude unnecessary files (node_modules, .git, etc.)
4. ✅ Run `npm install` on the server
5. ✅ Build the project with `npm run build`
6. ✅ Set proper permissions
7. ✅ Restart nginx

## Alternative: Manual Upload

If the script doesn't work, you can upload manually:

### Option 1: Using SCP
```bash
# Upload all project files
scp -r . root@your-server-ip:/var/www/servercanine/

# Connect to server and build
ssh root@your-server-ip
cd /var/www/servercanine
npm install
npm run build
chown -R www-data:www-data /var/www/servercanine
systemctl restart nginx
```

### Option 2: Using rsync manually
```bash
# Upload files with rsync
rsync -avz --progress \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.env' \
    . root@your-server-ip:/var/www/servercanine/

# Connect and build
ssh root@your-server-ip
cd /var/www/servercanine
npm install
npm run build
chown -R www-data:www-data /var/www/servercanine
systemctl restart nginx
```

## Troubleshooting

### rsync not found
**On Windows:**
```bash
# Install rsync via WSL or use SCP instead
```

**On macOS:**
```bash
brew install rsync
```

**On Ubuntu/Linux:**
```bash
sudo apt install rsync
```

### Permission denied
```bash
# Make sure the script is executable
chmod +x deploy-scripts/upload-project.sh
```

### SSH connection failed
```bash
# Test SSH connection first
ssh root@your-server-ip

# If it works, then run the upload script
```

### Build failed on server
```bash
# Connect to server and check
ssh root@your-server-ip
cd /var/www/servercanine
npm install
npm run build

# Check for errors and fix them
```

## After Upload Success

Once the upload completes successfully:

1. **Update nginx configuration with your domain:**
   ```bash
   ssh root@your-server-ip
   nano /etc/nginx/sites-available/servercanine
   # Replace 'your-domain.com' with your actual domain
   systemctl restart nginx
   ```

2. **Configure Cloudflare DNS:**
   - Add A record: @ → your-server-ip
   - Add CNAME record: www → your-domain.com

3. **Test your website:**
   - Visit your domain in a browser
   - Check HTTPS is working
   - Test all pages and forms

## Quick Commands Summary

```bash
# 1. Edit the script with your server IP
nano deploy-scripts/upload-project.sh

# 2. Make executable and run
chmod +x deploy-scripts/upload-project.sh
./deploy-scripts/upload-project.sh

# 3. Configure domain on server
ssh root@your-server-ip
nano /etc/nginx/sites-available/servercanine
systemctl restart nginx
```

Your ServerCanine website should now be live!
