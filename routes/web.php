<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

// All routes that are not API or login should go to home
Route::get('/{any}', 'HomeController@index')->where('any', '^(?!api|login|register|password|css|js|images).*$');