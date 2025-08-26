import { ArrowLeft, Database, Shield, Clock, Download, Copy, CheckCircle, AlertTriangle, Server, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BackupScripts = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute top-2 right-2 h-8 w-8 p-0"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/browse-documentation" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Backup Scripts</h1>
              <p className="text-xl text-gray-600 mt-2">
                Automated backup solutions and scripts for data protection and disaster recovery
              </p>
            </div>
          </div>
        </div>

        {/* Backup Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Backup Strategy Overview</CardTitle>
            <CardDescription>
              Comprehensive backup solutions to protect your data and ensure business continuity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800">Data Protection</h3>
                <p className="text-sm text-green-600 mt-2">Secure encrypted backups</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-800">Automated</h3>
                <p className="text-sm text-blue-600 mt-2">Scheduled backup execution</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Server className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-800">Multi-Platform</h3>
                <p className="text-sm text-purple-600 mt-2">Linux, Windows, macOS</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <HardDrive className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-orange-800">Flexible Storage</h3>
                <p className="text-sm text-orange-600 mt-2">Local, cloud, and hybrid</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Backup Types</CardTitle>
            <CardDescription>Choose the right backup strategy for your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Full Backup</h3>
                  <Badge variant="secondary">Complete</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Frequency:</span>
                    <span className="text-sm font-medium">Weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Storage:</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Recovery:</span>
                    <span className="text-sm font-medium">Fast</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete data copy
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Independent restore
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Baseline for incrementals
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Incremental</h3>
                  <Badge variant="default">Recommended</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Frequency:</span>
                    <span className="text-sm font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Storage:</span>
                    <span className="text-sm font-medium">Low</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Recovery:</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Changed files only
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Space efficient
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast backup process
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Differential</h3>
                  <Badge variant="outline">Balanced</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Frequency:</span>
                    <span className="text-sm font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Storage:</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Recovery:</span>
                    <span className="text-sm font-medium">Fast</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Changes since full backup
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Faster recovery
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Two-file restore
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Scripts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Backup Scripts</CardTitle>
            <CardDescription>Ready-to-use backup scripts for different platforms and scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="linux" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="linux">Linux</TabsTrigger>
                <TabsTrigger value="windows">Windows</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
              </TabsList>

              <TabsContent value="linux" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Linux File System Backup</h3>
                  <p className="text-gray-600 mb-4">Comprehensive backup script for Linux systems using rsync and tar</p>
                  <CodeBlock
                    language="bash"
                    id="linux-backup"
                    code={`#!/bin/bash

# ServerCanine Linux Backup Script
# Version: 2.0
# Description: Automated backup with compression and encryption

# Configuration
BACKUP_SOURCE="/home /etc /var/www"
BACKUP_DEST="/backup/$(date +%Y-%m-%d)"
REMOTE_DEST="user@backup-server:/backups/"
LOG_FILE="/var/log/backup.log"
RETENTION_DAYS=30
ENCRYPTION_KEY="/etc/backup/backup.key"

# Create backup directory
mkdir -p "$BACKUP_DEST"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to send notification
send_notification() {
    local status="$1"
    local message="$2"
    
    # Email notification (configure sendmail/postfix)
    echo "$message" | mail -s "Backup $status - $(hostname)" admin@servercanine.com
}

# Start backup process
log_message "Starting backup process"

# Create incremental backup using rsync
for source in $BACKUP_SOURCE; do
    if [ -d "$source" ]; then
        log_message "Backing up $source"
        rsync -avz --delete \\
              --link-dest="$BACKUP_DEST/../$(date -d '1 day ago' +%Y-%m-%d)" \\
              "$source" "$BACKUP_DEST/"
        
        if [ $? -eq 0 ]; then
            log_message "Successfully backed up $source"
        else
            log_message "ERROR: Failed to backup $source"
            exit 1
        fi
    fi
done

# Create compressed archive
log_message "Creating compressed archive"
cd "$BACKUP_DEST/.."
tar -czf "backup-$(date +%Y-%m-%d).tar.gz" "$(date +%Y-%m-%d)"

# Cleanup old backups
log_message "Cleaning up old backups"
find /backup -type d -mtime +$RETENTION_DAYS -exec rm -rf {} +

log_message "Backup process completed successfully"`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Crontab Configuration</h3>
                  <p className="text-gray-600 mb-4">Schedule automatic backups using cron</p>
                  <CodeBlock
                    language="bash"
                    id="crontab-config"
                    code={`# Add to crontab (crontab -e)

# Daily incremental backup at 2 AM
0 2 * * * /usr/local/bin/backup.sh

# Weekly full backup on Sunday at 1 AM
0 1 * * 0 /usr/local/bin/backup.sh --full

# Monthly cleanup on first day of month at 3 AM
0 3 1 * * /usr/local/bin/cleanup-old-backups.sh

# Backup verification every 6 hours
0 */6 * * * /usr/local/bin/verify-backup.sh`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="windows" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Windows PowerShell Backup</h3>
                  <p className="text-gray-600 mb-4">PowerShell script for Windows server backup with VSS snapshots</p>
                  <CodeBlock
                    language="powershell"
                    id="windows-backup"
                    code={`# ServerCanine Windows Backup Script
# Version: 2.0
# Description: Automated backup with VSS snapshots and compression

param(
    [string]$BackupType = "Incremental",
    [string]$ConfigFile = "C:\\Scripts\\backup-config.json"
)

# Load configuration
$Config = Get-Content $ConfigFile | ConvertFrom-Json

# Variables
$BackupDate = Get-Date -Format "yyyy-MM-dd"
$BackupDest = "$($Config.BackupDestination)\\$BackupDate"
$LogFile = "$($Config.LogPath)\\backup-$BackupDate.log"

# Function to write log
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $LogEntry = "[$Timestamp] [$Level] $Message"
    Write-Output $LogEntry
    Add-Content -Path $LogFile -Value $LogEntry
}

# Create backup directory
New-Item -ItemType Directory -Path $BackupDest -Force | Out-Null

Write-Log "Starting $BackupType backup process"

try {
    # Create VSS snapshot for consistent backup
    Write-Log "Creating VSS snapshot"
    $VssSnapshot = (vssadmin create shadow /for=C: /quiet)
    
    # Backup each source
    foreach ($Source in $Config.BackupSources) {
        Write-Log "Backing up $Source"
        $DestPath = "$BackupDest\\$(Split-Path $Source -Leaf)"
        
        # Use robocopy for efficient copying
        $Result = Start-Process -FilePath "robocopy" -ArgumentList @($Source, $DestPath, "/MIR") -Wait -PassThru
        
        if ($Result.ExitCode -le 7) {
            Write-Log "Successfully backed up $Source"
        } else {
            throw "Robocopy failed for $Source"
        }
    }
    
    # Compress backup
    Write-Log "Compressing backup archive"
    $ArchivePath = "$($Config.BackupDestination)\\backup-$BackupDate.zip"
    Compress-Archive -Path $BackupDest -DestinationPath $ArchivePath
    
    Write-Log "Backup process completed successfully"
    
} catch {
    Write-Log "ERROR: $($_.Exception.Message)" "ERROR"
    exit 1
}`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="database" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">MySQL Database Backup</h3>
                  <p className="text-gray-600 mb-4">Comprehensive MySQL backup with point-in-time recovery</p>
                  <CodeBlock
                    language="bash"
                    id="mysql-backup"
                    code={`#!/bin/bash

# ServerCanine MySQL Backup Script
# Version: 2.0
# Description: MySQL backup with binary logs and point-in-time recovery

# Configuration
DB_USER="backup_user"
DB_PASSWORD="secure_password"
DB_HOST="localhost"
BACKUP_DIR="/backup/mysql"
LOG_FILE="/var/log/mysql-backup.log"
RETENTION_DAYS=30

# Create backup directory
mkdir -p "$BACKUP_DIR/$(date +%Y-%m-%d)"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Get list of databases
log_message "Starting MySQL backup process"
databases=$(mysql --user="$DB_USER" --password="$DB_PASSWORD" --host="$DB_HOST" -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema|mysql|sys)")

# Backup each database
for database in $databases; do
    backup_file="$BACKUP_DIR/$(date +%Y-%m-%d)/\${database}_$(date +%Y%m%d_%H%M%S).sql"
    
    log_message "Backing up database: $database"
    
    mysqldump --user="$DB_USER" --password="$DB_PASSWORD" \\
              --host="$DB_HOST" \\
              --single-transaction \\
              --routines \\
              --triggers \\
              --events \\
              --databases "$database" > "$backup_file"
    
    if [ $? -eq 0 ]; then
        log_message "Successfully backed up $database"
        gzip "$backup_file"
    else
        log_message "ERROR: Failed to backup $database"
    fi
done

log_message "MySQL backup process completed"`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">PostgreSQL Backup</h3>
                  <p className="text-gray-600 mb-4">PostgreSQL backup script with custom format</p>
                  <CodeBlock
                    language="bash"
                    id="postgresql-backup"
                    code={`#!/bin/bash

# ServerCanine PostgreSQL Backup Script
# Version: 2.0

# Configuration
PGUSER="backup_user"
PGPASSWORD="secure_password"
PGHOST="localhost"
PGPORT="5432"
BACKUP_DIR="/backup/postgresql"
LOG_FILE="/var/log/postgresql-backup.log"

export PGUSER PGPASSWORD PGHOST PGPORT

# Create backup directory
mkdir -p "$BACKUP_DIR/$(date +%Y-%m-%d)"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_message "Starting PostgreSQL backup process"

# Get list of databases
databases=$(psql -t -c "SELECT datname FROM pg_database WHERE datistemplate = false;")

# Backup each database
for database in $databases; do
    database=$(echo $database | xargs)  # trim whitespace
    backup_file="$BACKUP_DIR/$(date +%Y-%m-%d)/\${database}_$(date +%Y%m%d_%H%M%S).backup"
    
    log_message "Backing up database: $database"
    
    pg_dump -Fc -f "$backup_file" "$database"
    
    if [ $? -eq 0 ]; then
        log_message "Successfully backed up $database"
    else
        log_message "ERROR: Failed to backup $database"
    fi
done

log_message "PostgreSQL backup process completed"`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="cloud" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">AWS S3 Backup</h3>
                  <p className="text-gray-600 mb-4">Upload backups to Amazon S3 with encryption</p>
                  <CodeBlock
                    language="bash"
                    id="aws-s3-backup"
                    code={`#!/bin/bash

# ServerCanine AWS S3 Backup Script
# Version: 2.0
# Description: Upload backups to S3 with encryption and lifecycle management

# Configuration
S3_BUCKET="servercanine-backups"
S3_PREFIX="$(hostname)/$(date +%Y/%m/%d)"
LOCAL_BACKUP_DIR="/backup"
AWS_PROFILE="backup"
LOG_FILE="/var/log/s3-backup.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_message "Starting S3 backup upload"

# Upload backups to S3
aws s3 sync "$LOCAL_BACKUP_DIR" "s3://$S3_BUCKET/$S3_PREFIX" \\
    --profile "$AWS_PROFILE" \\
    --storage-class STANDARD_IA \\
    --server-side-encryption AES256 \\
    --delete \\
    --exclude "*.tmp" \\
    --exclude "*.log"

if [ $? -eq 0 ]; then
    log_message "Successfully uploaded backups to S3"
    
    # Set lifecycle policy for cost optimization
    aws s3api put-bucket-lifecycle-configuration \\
        --bucket "$S3_BUCKET" \\
        --profile "$AWS_PROFILE" \\
        --lifecycle-configuration file://s3-lifecycle.json
        
else
    log_message "ERROR: Failed to upload backups to S3"
    exit 1
fi

log_message "S3 backup upload completed"`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Azure Blob Storage Backup</h3>
                  <p className="text-gray-600 mb-4">Upload backups to Azure Blob Storage</p>
                  <CodeBlock
                    language="bash"
                    id="azure-backup"
                    code={`#!/bin/bash

# ServerCanine Azure Blob Storage Backup Script
# Version: 2.0

# Configuration
STORAGE_ACCOUNT="servercaninebackups"
CONTAINER_NAME="backups"
LOCAL_BACKUP_DIR="/backup"
LOG_FILE="/var/log/azure-backup.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_message "Starting Azure Blob Storage backup upload"

# Upload backups to Azure Blob Storage
az storage blob upload-batch \\
    --destination "$CONTAINER_NAME" \\
    --source "$LOCAL_BACKUP_DIR" \\
    --account-name "$STORAGE_ACCOUNT" \\
    --destination-path "$(hostname)/$(date +%Y/%m/%d)" \\
    --overwrite

if [ $? -eq 0 ]; then
    log_message "Successfully uploaded backups to Azure Blob Storage"
else
    log_message "ERROR: Failed to upload backups to Azure Blob Storage"
    exit 1
fi

log_message "Azure backup upload completed"`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Backup Best Practices</CardTitle>
            <CardDescription>Essential guidelines for effective backup strategies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-800">✅ Do</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Test restore procedures regularly</p>
                      <p className="text-sm text-gray-600">Verify backups can be restored successfully</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Follow 3-2-1 backup rule</p>
                      <p className="text-sm text-gray-600">3 copies, 2 different media, 1 offsite</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Encrypt sensitive data</p>
                      <p className="text-sm text-gray-600">Use strong encryption for data protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Monitor backup jobs</p>
                      <p className="text-sm text-gray-600">Set up alerts for backup failures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-800">❌ Don't</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Rely on single backup location</p>
                      <p className="text-sm text-gray-600">Always maintain multiple backup copies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Ignore backup verification</p>
                      <p className="text-sm text-gray-600">Always verify backup integrity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Store backups on same system</p>
                      <p className="text-sm text-gray-600">Keep backups separate from source data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Forget about retention policies</p>
                      <p className="text-sm text-gray-600">Implement proper cleanup procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Next Steps</CardTitle>
            <CardDescription>
              Enhance your backup strategy with additional security and monitoring tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/docs/security-tools">Security Tools</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/docs/server-monitoring-agent">Set Up Monitoring</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-xl font-semibold text-gray-900">servercanine</span>
          </div>
          <p className="text-gray-600 mb-2">
            Affordable cloud hosting solutions for developers and agencies. Manage your infrastructure with ease and deploy with confidence.
          </p>
          <p className="text-sm text-gray-500">
            <a href="mailto:contact@servercanine.com" className="hover:text-blue-600">contact@servercanine.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackupScripts;
