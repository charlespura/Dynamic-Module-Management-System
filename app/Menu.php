<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'parent_id', 
        'name', 
        'icon', 
        'route', 
        'component', 
        'sort_order', 
        'status'
    ];

    // Parent menu relationship
    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    // Children menus relationship
    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id')
                    ->orderBy('sort_order');
    }

    // Get all children recursively
    public function allChildren()
    {
        return $this->children()->with('allChildren');
    }

    // Permission relationship
    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }

    // Scope for active menus
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    // Get menu tree (nested)
    public static function getMenuTree()
    {
        return self::whereNull('parent_id')
                   ->active()
                   ->orderBy('sort_order')
                   ->with('allChildren')
                   ->get();
    }
}