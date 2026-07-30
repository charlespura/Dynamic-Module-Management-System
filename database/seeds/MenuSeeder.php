<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Menu;

class MenuSeeder extends Seeder
{
    public function run()
    {
        // Main menus
        $dashboard = Menu::create([
            'name' => 'Dashboard',
            'icon' => 'home',
            'route' => '/dashboard',
            'component' => 'Dashboard',
            'sort_order' => 1,
            'status' => 1
        ]);

        $hr = Menu::create([
            'name' => 'HR',
            'icon' => 'users',
            'route' => '/hr',
            'component' => 'HR',
            'sort_order' => 2,
            'status' => 1
        ]);

        $finance = Menu::create([
            'name' => 'Finance',
            'icon' => 'money',
            'route' => '/finance',
            'component' => 'Finance',
            'sort_order' => 3,
            'status' => 1
        ]);

        $inventory = Menu::create([
            'name' => 'Inventory',
            'icon' => 'box',
            'route' => '/inventory',
            'component' => 'Inventory',
            'sort_order' => 4,
            'status' => 1
        ]);

        $settings = Menu::create([
            'name' => 'Settings',
            'icon' => 'settings',
            'route' => '/settings',
            'component' => 'Settings',
            'sort_order' => 5,
            'status' => 1
        ]);

        // HR Submenus
        Menu::create([
            'parent_id' => $hr->id,
            'name' => 'Employees',
            'icon' => 'user',
            'route' => '/hr/employees',
            'component' => 'Employees',
            'sort_order' => 1,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $hr->id,
            'name' => 'Attendance',
            'icon' => 'calendar',
            'route' => '/hr/attendance',
            'component' => 'Attendance',
            'sort_order' => 2,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $hr->id,
            'name' => 'Payroll',
            'icon' => 'dollar',
            'route' => '/hr/payroll',
            'component' => 'Payroll',
            'sort_order' => 3,
            'status' => 1
        ]);

        // Finance Submenus
        Menu::create([
            'parent_id' => $finance->id,
            'name' => 'Expenses',
            'icon' => 'credit-card',
            'route' => '/finance/expenses',
            'component' => 'Expenses',
            'sort_order' => 1,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $finance->id,
            'name' => 'Reports',
            'icon' => 'file-text',
            'route' => '/finance/reports',
            'component' => 'Reports',
            'sort_order' => 2,
            'status' => 1
        ]);

        // Inventory Submenus
        Menu::create([
            'parent_id' => $inventory->id,
            'name' => 'Products',
            'icon' => 'package',
            'route' => '/inventory/products',
            'component' => 'Products',
            'sort_order' => 1,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $inventory->id,
            'name' => 'Suppliers',
            'icon' => 'truck',
            'route' => '/inventory/suppliers',
            'component' => 'Suppliers',
            'sort_order' => 2,
            'status' => 1
        ]);

        // Settings Submenus
        Menu::create([
            'parent_id' => $settings->id,
            'name' => 'Users',
            'icon' => 'user-cog',
            'route' => '/settings/users',
            'component' => 'Users',
            'sort_order' => 1,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $settings->id,
            'name' => 'Roles',
            'icon' => 'shield',
            'route' => '/settings/roles',
            'component' => 'Roles',
            'sort_order' => 2,
            'status' => 1
        ]);

        Menu::create([
            'parent_id' => $settings->id,
            'name' => 'Menus',
            'icon' => 'menu',
            'route' => '/settings/menus',
            'component' => 'Menus',
            'sort_order' => 3,
            'status' => 1
        ]);
    }
}