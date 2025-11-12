#!/bin/bash

# Portfolio Deployment Script
# Usage: ./deploy.sh

set -e

echo "🚀 Starting portfolio deployment..."

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down || true

# Remove old images (optional, uncomment if needed)
# echo "🧹 Cleaning up old images..."
# docker image prune -f

# Build and start containers
echo "🏗️ Building and starting containers..."
docker-compose up --build -d

# Wait for nginx to be ready
echo "⏳ Waiting for application to be ready..."
sleep 5

# Health check
echo "🔍 Checking application health..."
if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running at http://localhost"
else
    echo "❌ Health check failed!"
    docker-compose logs
    exit 1
fi

echo "🎉 Portfolio deployed successfully!"