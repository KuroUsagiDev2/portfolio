<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[ PagesController::class, 'home'])->name('home');
Route::inertia('/experience', 'Experience');
Route::inertia('/services', 'Services');
Route::get('/projects',[ PagesController::class, 'projects'])->name('projects');
Route::inertia('/about', 'About');
/*
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
*/