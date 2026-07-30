<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Role relationship
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_roles');
    }

    // Check if user has role
    public function hasRole($roleSlug)
    {
        return $this->roles()->where('slug', $roleSlug)->exists();
    }

    // Check if user has permission for menu
    public function hasPermission($menuId, $action = 'view')
    {
        $permission = Permission::where('menu_id', $menuId)
                               ->whereIn('role_id', $this->roles->pluck('id'))
                               ->first();

        if (!$permission) {
            return false;
        }

        $actionField = 'can_' . $action;
        return $permission->$actionField ?? false;
    }
}