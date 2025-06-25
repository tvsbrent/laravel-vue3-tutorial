#!/bin/bash

# Laravel Docker Development Helper Script

case "$1" in
    "up")
        echo "Starting Laravel with MariaDB..."
        docker-compose up -d
        echo "Waiting for MariaDB to be ready..."
        sleep 10
        echo "Running migrations..."
        docker-compose exec app php artisan migrate
        echo "Application is ready at http://localhost:8000"
        echo "phpMyAdmin is available at http://localhost:8080"
        ;;
    "down")
        echo "Stopping containers..."
        docker-compose down
        ;;
    "build")
        echo "Building containers..."
        docker-compose build --no-cache
        ;;
    "fresh")
        echo "Fresh installation..."
        docker-compose down -v
        docker-compose build --no-cache
        docker-compose up -d
        sleep 15
        docker-compose exec app composer install
        docker-compose exec app npm install
        docker-compose exec app php artisan key:generate
        docker-compose exec app php artisan migrate:fresh --seed
        echo "Fresh installation complete!"
        ;;
    "logs")
        docker-compose logs -f
        ;;
    "shell")
        docker-compose exec app bash
        ;;
    "artisan")
        shift
        docker-compose exec app php artisan "$@"
        ;;
    "composer")
        shift
        docker-compose exec app composer "$@"
        ;;
    "npm")
        shift
        docker-compose exec app npm "$@"
        ;;
    *)
        echo "Laravel Docker Helper"
        echo "Usage: $0 {up|down|build|fresh|logs|shell|artisan|composer|npm}"
        echo ""
        echo "Commands:"
        echo "  up       - Start the development environment"
        echo "  down     - Stop the development environment"
        echo "  build    - Build the Docker containers"
        echo "  fresh    - Fresh installation (destroys data)"
        echo "  logs     - Show container logs"
        echo "  shell    - Access the app container shell"
        echo "  artisan  - Run artisan commands"
        echo "  composer - Run composer commands"
        echo "  npm      - Run npm commands"
        exit 1
        ;;
esac
