# Portfolio Deployment Script for Windows
# Usage: .\deploy.ps1

Write-Host "🚀 Starting portfolio deployment..." -ForegroundColor Green

try {
    # Stop existing containers
    Write-Host "🛑 Stopping existing containers..." -ForegroundColor Yellow
    docker-compose down 2>$null

    # Build and start containers
    Write-Host "🏗️ Building and starting containers..." -ForegroundColor Yellow
    docker-compose up --build -d

    # Wait for nginx to be ready
    Write-Host "⏳ Waiting for application to be ready..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5

    # Health check
    Write-Host "🔍 Checking application health..." -ForegroundColor Yellow
    try {
        $response = Invoke-WebRequest -Uri "http://localhost/health" -TimeoutSec 10
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ Deployment successful!" -ForegroundColor Green
            Write-Host "🌐 Application is running at http://localhost" -ForegroundColor Cyan
        } else {
            throw "Health check returned status code: $($response.StatusCode)"
        }
    } catch {
        Write-Host "❌ Health check failed!" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
        docker-compose logs
        exit 1
    }

    Write-Host "🎉 Portfolio deployed successfully!" -ForegroundColor Green

} catch {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    docker-compose logs
    exit 1
}