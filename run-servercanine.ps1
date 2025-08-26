# ServerCanine Development Server Launcher
# This script can be run from anywhere on your system

Write-Host "Starting ServerCanine Development Server..." -ForegroundColor Green
Write-Host ""

# Store current directory
$originalDir = Get-Location

# Project directory path
$projectDir = "C:\Users\UltraPc\Desktop\server-avatar-clone-main"

try {
    # Change to the project directory
    Set-Location $projectDir
    
    # Check if we're in the right directory
    if (-not (Test-Path "package.json")) {
        Write-Host "Error: Could not find ServerCanine project at $projectDir" -ForegroundColor Red
        Write-Host "Please check the project path." -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    Write-Host "Found ServerCanine project!" -ForegroundColor Green
    Write-Host ""
    
    # Check if node_modules exists
    if (-not (Test-Path "node_modules")) {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Error: Failed to install dependencies" -ForegroundColor Red
            Read-Host "Press Enter to exit"
            exit 1
        }
        Write-Host "Dependencies installed successfully!" -ForegroundColor Green
        Write-Host ""
    }
    
    Write-Host "Starting development server..." -ForegroundColor Green
    Write-Host "The server will be available at: http://localhost:8080" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host ""
    
    # Start the development server
    npm run dev
}
catch {
    Write-Host "An error occurred: $_" -ForegroundColor Red
    Read-Host "Press Enter to exit"
}
finally {
    # Return to original directory
    Set-Location $originalDir
}
