@echo off
echo Starting ServerCanine Development Server...
echo.

REM Store current directory
set ORIGINAL_DIR=%CD%

REM Change to the project directory
cd /d "C:\Users\UltraPc\Desktop\server-avatar-clone-main"

REM Check if we're in the right directory
if not exist "package.json" (
    echo Error: Could not find ServerCanine project at C:\Users\UltraPc\Desktop\server-avatar-clone-main
    echo Please check the project path.
    pause
    exit /b 1
)

echo Found ServerCanine project!
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    powershell -ExecutionPolicy Bypass -Command "npm install"
    if errorlevel 1 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
    echo Dependencies installed successfully!
    echo.
)

echo Starting development server...
echo The server will be available at: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
powershell -ExecutionPolicy Bypass -Command "npm run dev"

REM Return to original directory when done
cd /d "%ORIGINAL_DIR%"
