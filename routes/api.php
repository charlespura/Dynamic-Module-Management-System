<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MenuController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProjectController;

// Public routes
Route::post('login', [AuthController::class, 'login']);

// Protected routes (require authentication via Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    // User info
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Menu routes
    Route::prefix('menus')->group(function () {
        Route::get('/', [MenuController::class, 'index']);
        Route::get('/sidebar', [MenuController::class, 'getSidebarMenus']);
        Route::get('/{id}', [MenuController::class, 'show']);
        Route::post('/', [MenuController::class, 'store']);
        Route::put('/{id}', [MenuController::class, 'update']);
        Route::delete('/{id}', [MenuController::class, 'destroy']);
    });

    // Role routes
    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index']);
        Route::post('/', [RoleController::class, 'store']);
        Route::put('/{id}', [RoleController::class, 'update']);
        Route::delete('/{id}', [RoleController::class, 'destroy']);
        Route::post('/{id}/permissions', [RoleController::class, 'assignPermissions']);
    });

    // =============================================
    // PROJECT ROUTES - ADD THIS SECTION
    // =============================================
    Route::prefix('projects')->group(function () {
        Route::get('/', [ProjectController::class, 'index']);
        Route::get('/active', [ProjectController::class, 'active']);
        Route::get('/completed', [ProjectController::class, 'completed']);
        Route::get('/stats', [ProjectController::class, 'stats']);
        Route::get('/{id}', [ProjectController::class, 'show']);
        Route::post('/', [ProjectController::class, 'store']);
        Route::put('/{id}', [ProjectController::class, 'update']);
        Route::delete('/{id}', [ProjectController::class, 'destroy']);
    });
});