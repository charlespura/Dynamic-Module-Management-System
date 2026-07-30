<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name', 'slug', 'description'];

    // Relationship with Users
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_roles');
    }

    // Relationship with Permissions
    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }

    // Get menus with permissions for this role
    public function getMenusWithPermissions()
    {
        return Menu::with(['children', 'permissions' => function($query) {
            $query->where('role_id', $this->id);
        }])->whereNull('parent_id')->get();
    }
}