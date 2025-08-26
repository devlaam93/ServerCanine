# ServerCanine Monitoring & Maintenance Guide

## Server Monitoring

### 1. System Health Monitoring

#### Check System Resources
```bash
# Check CPU and memory usage
htop

# Check disk usage
df -h

# Check memory usage
free -h

# Check system load
uptime

# Check running processes
ps aux | grep node
ps aux | grep nginx
```

#### Monitor Nginx
```bash
# Check nginx status
systemctl status nginx

# Check nginx access logs
tail -f /var/log/nginx/access.log

# Check nginx error logs
tail -f /var/log/nginx/error.log

# Check nginx configuration
nginx -t

# Reload nginx configuration
systemctl reload nginx
```

### 2. Application Monitoring

#### Check Website Availability
```bash
# Test local response
curl -I http://localhost

# Test domain response
curl -I https://your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com
```

#### Performance Monitoring
```bash
# Check response times
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com

# Create curl-format.txt file:
cat > /root/curl-format.txt << 'EOF'
     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n
EOF
```

### 3. Security Monitoring

#### Check Failed Login Attempts
```bash
# Check auth logs
tail -f /var/log/auth.log

# Check fail2ban status
fail2ban-client status

# Check specific jail
fail2ban-client status sshd
```

#### Monitor Suspicious Activity
```bash
# Check for unusual network connections
netstat -tulpn

# Check for large files (potential uploads)
find /var/www -size +100M -type f

# Check for recently modified files
find /var/www -mtime -1 -type f
```

## Automated Monitoring Setup

### 1. Create Monitoring Script
```bash
cat > /root/monitor.sh << 'EOF'
#!/bin/bash

LOG_FILE="/var/log/servercanine-monitor.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting monitoring check..." >> $LOG_FILE

# Check disk space
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "[$DATE] WARNING: Disk usage is ${DISK_USAGE}%" >> $LOG_FILE
fi

# Check memory usage
MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEM_USAGE -gt 80 ]; then
    echo "[$DATE] WARNING: Memory usage is ${MEM_USAGE}%" >> $LOG_FILE
fi

# Check if nginx is running
if ! systemctl is-active --quiet nginx; then
    echo "[$DATE] ERROR: Nginx is not running" >> $LOG_FILE
    systemctl start nginx
fi

# Check website response
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://your-domain.com)
if [ $HTTP_CODE -ne 200 ]; then
    echo "[$DATE] ERROR: Website returned HTTP $HTTP_CODE" >> $LOG_FILE
fi

echo "[$DATE] Monitoring check completed" >> $LOG_FILE
EOF

chmod +x /root/monitor.sh
```

### 2. Set Up Cron Jobs
```bash
# Edit crontab
crontab -e

# Add these lines:
# Monitor every 5 minutes
*/5 * * * * /root/monitor.sh

# Daily backup at 2 AM
0 2 * * * /root/backup.sh

# Weekly log cleanup at 3 AM on Sundays
0 3 * * 0 find /var/log -name "*.log" -mtime +30 -delete

# Monthly security updates at 4 AM on 1st of month
0 4 1 * * apt update && apt upgrade -y
```

## Maintenance Tasks

### 1. Regular Updates

#### System Updates
```bash
# Update package lists
apt update

# Upgrade packages
apt upgrade -y

# Remove unnecessary packages
apt autoremove -y

# Clean package cache
apt autoclean
```

#### Node.js and Dependencies
```bash
cd /var/www/servercanine

# Check for outdated packages
npm outdated

# Update dependencies (be careful with major version changes)
npm update

# Rebuild project
npm run build

# Restart services
systemctl restart nginx
```

### 2. Log Management

#### Rotate Logs
```bash
# Configure logrotate for nginx
cat > /etc/logrotate.d/nginx << 'EOF'
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data adm
    postrotate
        systemctl reload nginx
    endscript
}
EOF
```

#### Clean Old Logs
```bash
# Clean logs older than 30 days
find /var/log -name "*.log" -mtime +30 -delete

# Clean journal logs older than 2 weeks
journalctl --vacuum-time=2weeks
```

### 3. Security Maintenance

#### Update SSL Certificates (if using Let's Encrypt)
```bash
# Renew certificates
certbot renew --dry-run

# Set up auto-renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -
```

#### Security Audits
```bash
# Check for security updates
apt list --upgradable | grep -i security

# Check open ports
nmap -sT -O localhost

# Check file permissions
find /var/www -type f -perm 777

# Check for suspicious files
find /var/www -name "*.php" -o -name "*.jsp" -o -name "*.asp"
```

## Backup and Recovery

### 1. Backup Strategy

#### Full System Backup
```bash
cat > /root/full-backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/root/backups"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup website files
tar -czf $BACKUP_DIR/servercanine_files_$DATE.tar.gz /var/www/servercanine

# Backup nginx configuration
tar -czf $BACKUP_DIR/nginx_config_$DATE.tar.gz /etc/nginx

# Backup system configuration
tar -czf $BACKUP_DIR/system_config_$DATE.tar.gz /etc/hosts /etc/hostname /etc/fstab

# Remove backups older than 30 days
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /root/full-backup.sh
```

#### Database Backup (if applicable)
```bash
# If you add a database later, use this template:
cat > /root/db-backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="servercanine"
DB_USER="your_db_user"
DB_PASS="your_db_password"

mysqldump -u$DB_USER -p$DB_PASS $DB_NAME > /root/backups/db_backup_$DATE.sql
gzip /root/backups/db_backup_$DATE.sql

# Keep only last 7 database backups
find /root/backups -name "db_backup_*.sql.gz" -mtime +7 -delete
EOF
```

### 2. Recovery Procedures

#### Restore Website Files
```bash
# Stop nginx
systemctl stop nginx

# Extract backup
cd /
tar -xzf /root/backups/servercanine_files_YYYYMMDD_HHMMSS.tar.gz

# Set permissions
chown -R www-data:www-data /var/www/servercanine

# Start nginx
systemctl start nginx
```

#### Restore Nginx Configuration
```bash
# Backup current config
cp -r /etc/nginx /etc/nginx.backup

# Restore from backup
cd /
tar -xzf /root/backups/nginx_config_YYYYMMDD_HHMMSS.tar.gz

# Test configuration
nginx -t

# Restart nginx
systemctl restart nginx
```

## Performance Optimization

### 1. Nginx Optimization
```bash
# Edit nginx configuration
nano /etc/nginx/nginx.conf

# Add these optimizations:
worker_processes auto;
worker_connections 1024;
keepalive_timeout 65;
client_max_body_size 50M;
```

### 2. System Optimization
```bash
# Optimize system limits
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# Optimize network settings
echo "net.core.somaxconn = 65536" >> /etc/sysctl.conf
sysctl -p
```

## Troubleshooting Common Issues

### 1. Website Down
```bash
# Check nginx status
systemctl status nginx

# Check nginx logs
tail -f /var/log/nginx/error.log

# Check disk space
df -h

# Check if build exists
ls -la /var/www/servercanine/dist/

# Rebuild if necessary
cd /var/www/servercanine && npm run build
```

### 2. High CPU Usage
```bash
# Check top processes
htop

# Check nginx worker processes
ps aux | grep nginx

# Check for runaway processes
ps aux --sort=-%cpu | head -10
```

### 3. High Memory Usage
```bash
# Check memory usage
free -h

# Check processes by memory
ps aux --sort=-%mem | head -10

# Clear cache if needed
sync && echo 3 > /proc/sys/vm/drop_caches
```

## Emergency Contacts and Procedures

### 1. Emergency Response
```bash
# Quick restart everything
systemctl restart nginx
systemctl restart fail2ban

# Emergency stop (if under attack)
ufw deny all
# Remember to re-enable: ufw allow OpenSSH && ufw allow 'Nginx Full'
```

### 2. Contact Information
- DigitalOcean Support: [Your support plan]
- Cloudflare Support: [Your support plan]
- Domain Registrar: Namecheap
- Emergency Contact: [Your contact info]

Remember to regularly review and update this monitoring setup based on your specific needs and traffic patterns.
