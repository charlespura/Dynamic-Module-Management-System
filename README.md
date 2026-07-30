# 🚀 Dynamic Module Management System
<img width="1200" height="600" alt="Screenshot 2026-07-30 144634" src="https://github.com/user-attachments/assets/8c564f66-7099-4b37-9a35-9dbbef4ea551" />

<img width="1200" height="600" alt="Screenshot 2026-07-30 144707" src="https://github.com/user-attachments/assets/709916ce-5b91-4f2e-a785-09360be5d115" />

A powerful, modular enterprise application built with Laravel 7 and Vue 2 that allows dynamic module creation, management, and permission control without writing code.

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#️-technology-stack)
- [Installation](#-installation)
- [Database Setup](#️-database-setup)
- [Configuration](#️-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Adding New Modules](#-adding-new-modules)
- [Creating a Module with Backend](#️-creating-a-module-with-backend)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- Dynamic Module Management - Create, edit, and delete modules without touching code
- Unlimited Nested Menus - Support for unlimited levels of submodules
- Role-Based Permissions - Assign permissions per role for each module
- Dynamic Sidebar - Sidebar builds automatically from database
- User Management - Create and manage system users
- Role Management - Create roles and assign permissions
- API-Driven Architecture - Fully RESTful API backend with Vue.js frontend
- Sanctum Authentication - Secure token-based authentication
- Responsive UI - Bootstrap 4 powered responsive interface

## 🛠️ Technology Stack

### Backend

- Laravel 7 - PHP Framework
- Laravel Sanctum - API Authentication
- MySQL - Database
- PHP 7.3+ - Server-side language

### Frontend

- Vue 2 - JavaScript Framework
- Vue Router - Routing
- Vuex - State Management
- Bootstrap 4 - CSS Framework
- Font Awesome 4 - Icons
- Axios - HTTP Client

### Development Tools

- Laravel Mix - Asset Compilation
- Composer - PHP Dependency Manager
- NPM - Node Package Manager

## 📦 Installation

### Prerequisites

- PHP 7.3 or higher
- Composer
- Node.js & NPM
- MySQL
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/charlespura/Dynamic-Module-Management-System.git
cd dynamic-module-system
```

### Step 2: Install PHP Dependencies

```bash
composer install
```

### Step 3: Install JavaScript Dependencies

```bash
npm install
```

### Step 4: Environment Configuration

Copy the example environment file and update with your database credentials:

```bash
cp .env.example .env
```

Update the following variables in .env:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dynamic_modules_db
DB_USERNAME=root
DB_PASSWORD=your_password

APP_URL=http://127.0.0.1:8000
```

### Step 5: Generate Application Key

```bash
php artisan key:generate
```

## 🗄️ Database Setup

### Step 1: Create Database

```sql
CREATE DATABASE dynamic_modules_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Step 2: Run Migrations

```bash
php artisan migrate
```

### Step 3: Seed the Database

```bash
php artisan db:seed
```

This will create:

- Default menus (Dashboard, HR, Finance, Inventory, Settings)
- Default roles (Admin, HR Manager, Finance Manager, Employee)
- Admin user (email: admin@example.com, password: password)

### Step 4: Install Sanctum

```bash
php artisan sanctum:install
```

## ⚙️ Configuration

### Sanctum Configuration

Ensure your config/sanctum.php has the correct stateful domains:

```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
    env('APP_URL') ? ','.parse_url(env('APP_URL'), PHP_URL_HOST) : ''
))),
```

### CORS Configuration

Update config/cors.php if needed:

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_methods' => ['*'],
'allowed_origins' => ['*'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => false,
```

## 🚀 Running the Application

### Start the Laravel Development Server

```bash
php artisan serve
```

### Compile Frontend Assets

```bash
# Development
npm run dev

# Watch for changes
npm run watch

# Production
npm run production
```

### Access the Application

Open your browser and go to: http://127.0.0.1:8000

Default Login Credentials:

- Email: admin@example.com
- Password: password

## 📁 Project Structure

```text
dynamic-module-system/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── API/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── MenuController.php
│   │   │   │   ├── RoleController.php
│   │   │   │   └── ProjectController.php
│   │   │   └── Auth/
│   │   │       └── LoginController.php
│   │   └── Middleware/
│   ├── Models/
│   │   ├── User.php
│   │   ├── Menu.php
│   │   ├── Role.php
│   │   ├── Permission.php
│   │   └── Project.php
│   └── Providers/
│       └── AuthServiceProvider.php
├── database/
│   ├── migrations/
│   │   ├── create_menus_table.php
│   │   ├── create_roles_table.php
│   │   ├── create_permissions_table.php
│   │   ├── create_user_roles_table.php
│   │   └── create_projects_table.php
│   └── seeders/
│       ├── MenuSeeder.php
│       ├── RoleSeeder.php
│       └── UserSeeder.php
├── resources/
│   ├── js/
│   │   ├── components/
│   │   │   ├── App.vue
│   │   │   ├── Sidebar.vue
│   │   │   ├── Login.vue
│   │   │   ├── Dashboard.vue
│   │   │   ├── Menus.vue
│   │   │   ├── Roles.vue
│   │   │   ├── Users.vue
│   │   │   └── Projects.vue
│   │   └── app.js
│   ├── sass/
│   │   └── app.scss
│   └── views/
│       └── home.blade.php
├── routes/
│   ├── api.php
│   └── web.php
├── public/
│   ├── css/
│   └── js/
├── .env.example
├── composer.json
├── package.json
├── webpack.mix.js
└── README.md
```

## 🎯 How It Works

### Dynamic Menu System

- Database-Driven: Menus are stored in the menus table with parent-child relationships
- Tree Structure: Unlimited nesting using parent_id field
- Auto-Generated Sidebar: Vue component builds sidebar from API response
- Real-Time Updates: Changes reflect immediately without code deployment

### Database Schema

#### Menus Table

```sql
CREATE TABLE menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT NULL,
    name VARCHAR(100),
    icon VARCHAR(100),
    route VARCHAR(255),
    component VARCHAR(255),
    sort_order INT,
    status TINYINT DEFAULT 1,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY(parent_id) REFERENCES menus(id) ON DELETE CASCADE
);
```

#### Roles Table

```sql
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

#### Permissions Table

```sql
CREATE TABLE permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    menu_id INT,
    can_view BOOLEAN DEFAULT TRUE,
    can_create BOOLEAN DEFAULT FALSE,
    can_edit BOOLEAN DEFAULT FALSE,
    can_delete BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY(menu_id) REFERENCES menus(id) ON DELETE CASCADE
);
```

## ➕ Adding New Modules

### Method 1: Using Admin Panel (Recommended)

1. Login as admin
2. Go to Settings → Menus
3. Click "Add New Module"
4. Fill in the form:
   - Module Name: e.g., "Projects"
   - Parent Module: None for top-level
   - Icon: Font Awesome icon name (e.g., "project-diagram")
   - Route: URL path (e.g., "/projects")
   - Component: Vue component name (e.g., "Projects")
   - Sort Order: Display order
   - Status: Active
5. Click "Create"
6. Add submodules using "Add Sub" button

### Method 2: Using Tinker

```bash
php artisan tinker
```

```php
// Create top-level module
App\Menu::create([
    'name' => 'Projects',
    'icon' => 'project-diagram',
    'route' => '/projects',
    'component' => 'Projects',
    'sort_order' => 6,
    'status' => 1
]);

// Add submodule
$projects = App\Menu::where('name', 'Projects')->first();
App\Menu::create([
    'parent_id' => $projects->id,
    'name' => 'Active Projects',
    'icon' => 'check-circle',
    'route' => '/projects/active',
    'component' => 'ActiveProjects',
    'sort_order' => 1,
    'status' => 1
]);
```

### Method 3: Using Database

```sql
INSERT INTO menus (name, icon, route, component, sort_order, status, created_at, updated_at) 
VALUES ('Projects', 'project-diagram', '/projects', 'Projects', 6, 1, NOW(), NOW());
```

## 🏗️ Creating a Module with Backend

### Step 1: Create Migration

```bash
php artisan make:migration create_projects_table
```

### Step 2: Create Model

```bash
php artisan make:model Project
```

### Step 3: Create Controller

```bash
php artisan make:controller API/ProjectController
```

### Step 4: Add Routes

```php
// routes/api.php
Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);
    Route::post('/', [ProjectController::class, 'store']);
    Route::put('/{id}', [ProjectController::class, 'update']);
    Route::delete('/{id}', [ProjectController::class, 'destroy']);
});
```

### Step 5: Create Vue Component

```vue
<!-- resources/js/components/Projects.vue -->
<template>
    <div>
        <h2>Projects</h2>
        <div class="card">
            <div class="card-body">
                <button @click="addProject" class="btn btn-primary">
                    Add Project
                </button>
                <!-- Your project list here -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Projects',
    data() {
        return {
            projects: []
        };
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        async fetchProjects() {
            const response = await axios.get('/projects');
            this.projects = response.data.data;
        }
    }
}
</script>
```

## 📡 API Documentation

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/login | Login user and get token |
| POST | /api/logout | Logout user |
| GET | /api/user | Get authenticated user |

### Menus

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/menus | Get all menus |
| GET | /api/menus/sidebar | Get sidebar menu tree |
| POST | /api/menus | Create new menu |
| PUT | /api/menus/{id} | Update menu |
| DELETE | /api/menus/{id} | Delete menu |

### Roles

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/roles | Get all roles |
| POST | /api/roles | Create new role |
| PUT | /api/roles/{id} | Update role |
| DELETE | /api/roles/{id} | Delete role |

### Projects (Example Module)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | Get all projects |
| POST | /api/projects | Create new project |
| PUT | /api/projects/{id} | Update project |
| DELETE | /api/projects/{id} | Delete project |
| GET | /api/projects/active | Get active projects |
| GET | /api/projects/completed | Get completed projects |
| GET | /api/projects/stats | Get project statistics |

## 📸 Screenshots

### Login Page
https://via.placeholder.com/800x400?text=Login+Page

### Dashboard
https://via.placeholder.com/800x400?text=Dashboard

### Menu Management
https://via.placeholder.com/800x400?text=Menu+Management

### Dynamic Sidebar
https://via.placeholder.com/800x400?text=Dynamic+Sidebar

### Projects Module
https://via.placeholder.com/800x400?text=Projects+Module

## 🔧 Troubleshooting

### Common Issues

**1. "Class not found" errors**

```bash
composer dump-autoload
```

**2. Migration errors**

```bash
php artisan migrate:fresh
php artisan migrate
php artisan db:seed
```

**3. 401 Unauthorized**

- Make sure you're logged in
- Check token in localStorage
- Verify Sanctum configuration

**4. Sidebar not showing menus**

```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

**5. Compilation errors**

```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
npm run dev
```

**6. Database connection issues**

- Check .env database credentials
- Ensure MySQL is running
- Verify database exists

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### Coding Standards

- Follow PSR-12 coding standards
- Use meaningful variable names
- Comment complex code sections
- Write tests for new features

## 📄 License

This project is open-sourced software licensed under the MIT license.

## 🙏 Acknowledgments

- Laravel - The PHP framework
- Vue.js - The JavaScript framework
- Bootstrap - CSS framework
- Font Awesome - Icons

## 📧 Contact

- Author: Charles Pura
- GitHub: [charlespura](https://github.com/charlespura)
- Repository: [Dynamic-Module-Management-System](https://github.com/charlespura/Dynamic-Module-Management-System)

<p align="center">Made with ❤️ using Laravel & Vue</p>

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced reporting
- [ ] Export/Import modules
- [ ] Audit logs
- [ ] Email notifications
- [ ] Activity monitoring
- [ ] REST API documentation (Swagger)

## 📝 Changelog

### v1.0.0 - 2024-01-01
- Initial release
- Dynamic module system
- Role-based permissions
- User management
- Project management example
