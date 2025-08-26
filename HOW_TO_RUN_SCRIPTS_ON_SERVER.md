# How to Run Shell Scripts on Your DigitalOcean Server

## Method 1: Upload and Run Script (Recommended)

### Step 1: Connect to Your Server
```bash
ssh root@your-server-ip
```
Replace `your-server-ip` with your actual DigitalOcean droplet IP address.

### Step 2: Upload the Script File
You have several options to upload the script:

#### Option A: Using SCP (from your local machine)
```bash
# From your local machine (where the script is located)
scp deploy-scripts/server-setup.sh root@your-server-ip:/root/
```

#### Option B: Using nano to create the script directly on server
```bash
# On your server, create the script file
nano /root/server-setup.sh

# Copy and paste the entire content from deploy-scripts/server-setup.sh
# Press Ctrl+X, then Y, then Enter to save
```

#### Option C: Using wget (if script is hosted online)
```bash
# If you upload the script to GitHub or another hosting service
wget https://raw.githubusercontent.com/your-repo/server-setup.sh -O /root/server-setup.sh
```

### Step 3: Make the Script Executable
```bash
chmod +x /root/server-setup.sh
```

### Step 4: Run the Script
```bash
/root/server-setup.sh
```

Or simply:
```bash
bash /root/server-setup.sh
```

## Method 2: Copy-Paste Commands (Alternative)

If you prefer not to upload the script file, you can copy and paste the commands directly:

### Step 1: Connect to Your Server
```bash
ssh root@your-server-ip
```

### Step 2: Run Commands One by One
Copy each section from the script and paste it into your terminal:

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

# Continue with other commands...
```

## Method 3: Using Screen (For Long-Running Scripts)

If the script takes a long time to run, use screen to prevent disconnection:

### Step 1: Install and Start Screen
```bash
apt install screen -y
screen -S deployment
```

### Step 2: Run the Script
```bash
chmod +x /root/server-setup.sh
/root/server-setup.sh
```

### Step 3: Detach from Screen (Optional)
Press `Ctrl+A` then `D` to detach from screen session.

### Step 4: Reattach to Screen (If Needed)
```bash
screen -r deployment
```

## Troubleshooting

### Permission Denied Error
```bash
# If you get permission denied, make sure the script is executable
chmod +x /root/server-setup.sh
```

### Script Not Found
```bash
# Check if the script exists
ls -la /root/server-setup.sh

# If not found, re-upload or recreate the script
```

### Command Not Found
```bash
# If bash command is not found, try with sh
sh /root/server-setup.sh
```

## What the Script Does

The `server-setup.sh` script will automatically:
1. ✅ Update your system packages
2. ✅ Install Node.js 18
3. ✅ Install and configure nginx
4. ✅ Install Git and PM2
5. ✅ Set up firewall (UFW)
6. ✅ Install security tools (fail2ban)
7. ✅ Create nginx configuration for ServerCanine
8. ✅ Create backup and deployment scripts
9. ✅ Set up proper permissions

## After Running the Script

Once the script completes successfully, you'll see:
```
🎉 Server setup completed successfully!

Next steps:
1. Upload your ServerCanine project files to /var/www/servercanine
2. Edit /etc/nginx/sites-available/servercanine and replace 'your-domain.com' with your actual domain
3. Run: cd /var/www/servercanine && npm install && npm run build
4. Run: systemctl restart nginx
5. Configure your Cloudflare DNS settings
```

## Quick Commands Reference

```bash
# Connect to server
ssh root@your-server-ip

# Upload script (from local machine)
scp deploy-scripts/server-setup.sh root@your-server-ip:/root/

# Make executable and run (on server)
chmod +x /root/server-setup.sh && /root/server-setup.sh

# Check if nginx is running
systemctl status nginx

# View script output/logs
tail -f /var/log/syslog
```

That's it! Your server will be ready for ServerCanine deployment after running the script.
