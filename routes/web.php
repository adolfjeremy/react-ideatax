<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TeamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/our-team', [TeamController::class, 'index'])->name('team');
Route::get('/our-team/detail', [TeamController::class, 'detail'])->name('team-detail');
Route::get('/our-services', [ServiceController::class, 'index'])->name('service');
Route::get('/our-services/detail', [ServiceController::class, 'detail'])->name('service-detail');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
Route::get('/articles/detail', [ArticleController::class, 'detail'])->name('article-detail');
Route::get('/careers', [CareerController::class, 'index'])->name('career');
Route::get('/careers/detail', [CareerController::class, 'detail'])->name('career-detail');
Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
