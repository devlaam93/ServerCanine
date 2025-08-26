# How to Install Git on Windows

## Method 1: Download from Official Website (Recommended)

### Step 1: Download Git
1. **Go to:** https://git-scm.com/download/windows
2. **Click "Download for Windows"**
3. **The download will start automatically**

### Step 2: Install Git
1. **Run the downloaded installer** (Git-2.x.x-64-bit.exe)
2. **Follow the installation wizard:**
   - Click "Next" through the license agreement
   - **Installation location:** Keep default (C:\Program Files\Git)
   - **Select components:** Keep default selections
   - **Start Menu folder:** Keep default
   - **Default editor:** Choose "Use Visual Studio Code as Git's default editor" (if you have VS Code)
   - **Branch naming:** Choose "Override the default branch name for new repositories" and use "main"
   - **PATH environment:** Choose "Git from the command line and also from 3rd-party software"
   - **SSH executable:** Choose "Use bundled OpenSSH"
   - **HTTPS transport backend:** Choose "Use the OpenSSL library"
   - **Line ending conversions:** Choose "Checkout Windows-style, commit Unix-style line endings"
   - **Terminal emulator:** Choose "Use MinTTY"
   - **Git pull behavior:** Choose "Default (fast-forward or merge)"
   - **Credential helper:** Choose "Git Credential Manager"
   - **Extra options:** Enable "Enable file system caching"
   - Click "Install"

### Step 3: Verify Installation
1. **Open Command Prompt or PowerShell**
2. **Run:** `git --version`
3. **You should see:** `git version 2.x.x.windows.x`

## Method 2: Using Winget (Windows Package Manager)

If you have Windows 10/11 with winget:

```powershell
# Install Git using winget
winget install --id Git.Git -e --source winget
```

## Method 3: Using Chocolatey

If you have Chocolatey installed:

```powershell
# Install Git using Chocolatey
choco install git
```

## Method 4: Using Scoop

If you have Scoop installed:

```powershell
# Install Git using Scoop
scoop install git
```

## After Installation: Configure Git

Once Git is installed, configure it with your information:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use the same email as your GitHub account)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

## Test Git Installation

```bash
# Check Git version
git --version

# Check Git configuration
git config --global --list
```

## Next Steps: Deploy to GitHub

After Git is installed, you can deploy your ServerCanine project:

### 1. Initialize Git Repository
```bash
# Navigate to your project folder
cd C:\Users\UltraPc\Desktop\server-avatar-clone-main

# Initialize Git repository
git init
```

### 2. Add Files
```bash
# Add all files
git add .
```

### 3. Commit Files
```bash
git commit -m "Add complete DigitalOcean deployment package

- Add comprehensive deployment guide
- Add automated server setup script
- Add project upload script with rsync
- Add monitoring and maintenance guide
- Add step-by-step execution instructions
- Ready for production deployment with Cloudflare and Namecheap"
```

### 4. Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name: `servercanine-hosting`
4. Description: `ServerCanine hosting website with DigitalOcean deployment`
5. Click "Create repository"

### 5. Connect to GitHub
```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/servercanine-hosting.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Troubleshooting

### Git command not found after installation
1. **Restart your terminal/PowerShell**
2. **Restart your computer**
3. **Check if Git is in PATH:**
   - Open System Properties → Advanced → Environment Variables
   - Check if `C:\Program Files\Git\bin` is in PATH

### Permission issues
1. **Run PowerShell as Administrator**
2. **Or use Git Bash** (installed with Git)

### HTTPS authentication issues
1. **Use Personal Access Token instead of password**
2. **Or set up SSH keys**

## Alternative: GitHub Desktop

If you prefer a GUI:

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Install and sign in with your GitHub account**
3. **Use "Add Local Repository" to add your project**
4. **Publish to GitHub**

## Quick Installation Summary

**Fastest method:**
1. Download from https://git-scm.com/download/windows
2. Run installer with default settings
3. Restart terminal
4. Configure: `git config --global user.name "Your Name"`
5. Configure: `git config --global user.email "your.email@example.com"`
6. Test: `git --version`

You're now ready to deploy your ServerCanine project to GitHub!
