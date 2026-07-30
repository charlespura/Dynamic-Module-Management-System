<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name', 
        'description', 
        'status', 
        'start_date', 
        'deadline', 
        'completed_date',
        'created_by'
    ];

    protected $casts = [
        'start_date' => 'date',
        'deadline' => 'date',
        'completed_date' => 'date',
    ];

    // Relationship with User
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // Scope for active projects
    public function scopeActive($query)
    {
        return $query->where('status', 'Active');
    }

    // Scope for completed projects
    public function scopeCompleted($query)
    {
        return $query->where('status', 'Completed');
    }
}