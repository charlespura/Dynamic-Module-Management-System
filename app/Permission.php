<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = [
        'role_id', 
        'menu_id', 
        'can_view', 
        'can_create', 
        'can_edit', 
        'can_delete'
    ];

    // Relationship with Role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // Relationship with Menu
    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}