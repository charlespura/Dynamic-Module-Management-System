<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

// All routes that are not API or login should go to home
Route::get('/{any}', 'HomeController@index')->where('any', '^(?!api|login|register|password|css|js|images).*$');

// Add this route to serve service worker
Route::get('/service-worker.js', function() {
    return response()->file(public_path('service-worker.js'));
});

Route::get('/manifest.json', function() {
    return response()->file(public_path('manifest.json'));
});