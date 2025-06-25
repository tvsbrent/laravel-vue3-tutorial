#!/bin/bash

# Laravel Docker Development Setup Script

echo "Setting up Laravel development environment..."

# Install latest NPM
sudo npm install -g npm@latest

# Install PHP dependencies
echo "Installing Composer dependencies..."
composer install

# Install Node.js dependencies
echo "Installing NPM dependencies..."
npm install

# Set up environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
fi

# Generate application key if not set
echo "Checking application key..."
if grep -q "APP_KEY=$" .env || grep -q "APP_KEY=''$" .env || grep -q 'APP_KEY=""$' .env; then
    echo "Generating new application key..."
    php artisan key:generate
else
    echo "Application key already exists, skipping generation."
fi

# Wait for database to be ready and run migrations
echo "Waiting for database to be ready..."
sleep 5

echo "Running database migrations..."
php artisan migrate

echo ""
echo "Development environment setup complete!"
echo "Laravel application available at: http://localhost:8000"
echo "Adminer available at: http://localhost:8080"
