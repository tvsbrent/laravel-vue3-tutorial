# Laravel with MariaDB Docker Setup

This project has been configured to use Docker Compose with MariaDB 10.8.3 for
development.

## Services

- **Laravel App**: PHP 8.2 with Laravel framework
- **MariaDB**: Version 10.8.3 database server
- **phpMyAdmin**: Web-based database administration tool

## Quick Start

### Using Docker Compose directly:

```bash
# Start the development environment
docker-compose up -d

# Run migrations (after containers are up)
docker-compose exec app php artisan migrate

# Stop the environment
docker-compose down
```

### Using the helper script:

```bash
# Start everything
./docker-dev.sh up

# Fresh installation (removes all data)
./docker-dev.sh fresh

# Stop everything
./docker-dev.sh down

# View logs
./docker-dev.sh logs

# Access the app container shell
./docker-dev.sh shell

# Run artisan commands
./docker-dev.sh artisan migrate
./docker-dev.sh artisan make:controller UserController

# Run composer commands
./docker-dev.sh composer install
./docker-dev.sh composer require package/name

# Run npm commands
./docker-dev.sh npm install
./docker-dev.sh npm run dev
```

### Using Composer scripts:

```bash
composer run docker:up
composer run docker:down
composer run docker:fresh
```

## Access URLs

- **Laravel Application**: http://localhost:8000
- **phpMyAdmin**: http://localhost:8080
- **Vite Dev Server**: http://localhost:5173

## Database Configuration

The MariaDB container is configured with:
- **Database**: laravel
- **Username**: laravel
- **Password**: laravel
- **Root Password**: root

## VS Code Dev Container

This project includes a VS Code dev container configuration. To use it:

1. Install the "Dev Containers" extension in VS Code
2. Open the project in VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Run "Dev Containers: Reopen in Container"

The dev container will automatically:
- Start the MariaDB service
- Install PHP and Node.js dependencies
- Configure the Laravel environment
- Set up useful VS Code extensions for Laravel development

## Development Workflow

1. Start the containers: `./docker-dev.sh up`
2. The Laravel app will be available at http://localhost:8000
3. Use phpMyAdmin at http://localhost:8080 to manage the database
4. Make your code changes (files are mounted as volumes)
5. For frontend development, you can run `./docker-dev.sh npm run dev` for Vite

## Troubleshooting

### Container won't start
- Make sure no other services are running on ports 8000, 3306, or 8080
- Try `docker-compose down` then `docker-compose up -d`

### Database connection issues
- Wait a few seconds after `docker-compose up` for MariaDB to fully initialize
- Check that the DB_HOST in .env is set to "mariadb" (the service name)

### Permission issues
- The app container runs as www-data user
- If you have permission issues, you may need to adjust file ownership

## Data Persistence

- MariaDB data is persisted in a Docker volume named `mariadb_data`
- To completely reset the database, run `./docker-dev.sh fresh`
- To remove all data permanently: `docker-compose down -v`
