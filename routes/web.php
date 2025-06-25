<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia(component: 'Index/Index');
});
