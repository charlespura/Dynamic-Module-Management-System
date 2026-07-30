<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Role;

class RoleSeeder extends Seeder
{
    public function run()
    {
        Role::create([
            'name' => 'Administrator',
            'slug' => 'admin',
            'description' => 'Full system access'
        ]);

        Role::create([
            'name' => 'HR Manager',
            'slug' => 'hr-manager',
            'description' => 'HR module access'
        ]);

        Role::create([
            'name' => 'Finance Manager',
            'slug' => 'finance-manager',
            'description' => 'Finance module access'
        ]);

        Role::create([
            'name' => 'Employee',
            'slug' => 'employee',
            'description' => 'Basic employee access'
        ]);
    }
}