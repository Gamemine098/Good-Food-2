<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('Welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/Menu', function () {
    return Inertia::render('Menu', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('Menu');

Route::get('/Forms', function () {
    return Inertia::render('Forms', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('Forms');

Route::get('/Results', function (\Illuminate\Http\Request $request) {
    return Inertia::render('Results', [
        'gender' => $request->input('gender'),
        'age' => $request->input('age'),
        'weight' => $request->input('weight'),
        'exercise' => $request->input('exercise'),
        'goal' => $request->input('goal'),
        'reason' => $request->input('reason'),
        'reason_not_healthy' => $request->input('reason_not_healthy'),
        'health_interest' => $request->input('health_interest'),
    ]);
})->name('Results');

Route::get('/About', function () {
    return Inertia::render('About', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('About');

Route::get('/Contact', function () {
    return Inertia::render('Contact', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('Contact');

require __DIR__ . '/auth.php';
