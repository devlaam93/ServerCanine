# How to Run ServerCanine from Anywhere

You now have portable scripts that can launch the ServerCanine development server from any directory on your system.

## Available Scripts

### 1. Batch Script (run-servercanine.bat)
- **Location**: `C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.bat`
- **Usage**: Double-click the file or run from command line
- **Command line**: `"C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.bat"`

### 2. PowerShell Script (run-servercanine.ps1)
- **Location**: `C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.ps1`
- **Usage**: Right-click → "Run with PowerShell" or run from PowerShell
- **Command line**: `& "C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.ps1"`

## What These Scripts Do

1. **Automatically navigate** to the ServerCanine project directory
2. **Check if dependencies are installed** - if not, installs them automatically
3. **Start the development server** on http://localhost:8080
4. **Return to your original directory** when you stop the server

## Running from Anywhere

### Option 1: Copy Scripts to a Global Location
Copy either script to a directory in your PATH (like `C:\Windows\System32`) to run from anywhere:

```cmd
# From any directory, just type:
run-servercanine.bat
```

### Option 2: Create Desktop Shortcuts
1. Right-click on your desktop
2. Select "New" → "Shortcut"
3. Enter the full path to either script
4. Name it "ServerCanine Dev Server"
5. Double-click to launch from anywhere

### Option 3: Add to PATH Environment Variable
1. Add `C:\Users\UltraPc\Desktop\server-avatar-clone-main` to your PATH
2. Then run from any directory: `run-servercanine.bat`

### Option 4: Use Full Path
From any directory in Command Prompt or PowerShell:

```cmd
# Command Prompt
"C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.bat"

# PowerShell
& "C:\Users\UltraPc\Desktop\server-avatar-clone-main\run-servercanine.ps1"
```

## Features

- ✅ **Smart dependency management** - automatically installs if needed
- ✅ **Error handling** - shows helpful messages if something goes wrong
- ✅ **Directory restoration** - returns you to where you started
- ✅ **Cross-platform** - works with both Command Prompt and PowerShell
- ✅ **No manual navigation** - no need to cd into project directory

## Server Information

- **Local URL**: http://localhost:8080/
- **Network URLs**: Available on your local network
- **Hot Reload**: Automatically refreshes when you edit files
- **Stop Server**: Press `Ctrl+C` in the terminal

Enjoy developing with ServerCanine! 🚀
