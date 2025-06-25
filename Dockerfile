FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Set working directory
WORKDIR /workspace

# Install system dependencies for Laravel development
RUN apt-get update && apt-get install -y \
    software-properties-common \
    curl \
    wget \
    git \
    unzip \
    zip \
    default-mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Add PHP repository and install PHP 8.2
RUN add-apt-repository ppa:ondrej/php -y \
    && apt-get update \
    && apt-get install -y \
        php8.2 \
        php8.2-cli \
        php8.2-fpm \
        php8.2-mysql \
        php8.2-xml \
        php8.2-curl \
        php8.2-gd \
        php8.2-mbstring \
        php8.2-zip \
        php8.2-bcmath \
        php8.2-intl \
        php8.2-readline \
        php8.2-xdebug \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js 22.x
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

# Set up PHP configuration for development
RUN echo "memory_limit = 512M" >> /etc/php/8.2/cli/conf.d/99-dev.ini \
    && echo "max_execution_time = 300" >> /etc/php/8.2/cli/conf.d/99-dev.ini

# Create symbolic links for easier PHP access
RUN ln -sf /usr/bin/php8.2 /usr/local/bin/php

# Set proper permissions for workspace
RUN chown -R vscode:vscode /workspace

# Grant vscode user sudo access without password
RUN usermod -aG sudo vscode \
    && echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to vscode user (from base image)
USER vscode

# Set working directory
WORKDIR /workspace
