<?php

use App\Http\Controllers\Admin\AdminArticleController;
use App\Http\Controllers\Admin\AdminCareerController;
use App\Http\Controllers\Admin\AdminTeamController;
use App\Http\Controllers\Admin\ArticleCategoryController;
use App\Http\Controllers\Admin\HeroController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\StatController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;
use App\Http\Controllers\Admin\TaxEventController;
use App\Http\Controllers\LocalizationController;
use App\Http\Middleware\ChangeLocal;

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

Route::get('lang/{lang}', [LocalizationController::class, 'switchLang'])->name('switchLang');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/our-team', [TeamController::class, 'index'])->name('team');
Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail');
Route::get('/our-services', [ServiceController::class, 'index'])->name('service');
Route::get('/our-services/{slug_eng}', [ServiceController::class, 'detail'])->name('service-detail');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
Route::get('/articles/{slug_eng}', [ArticleController::class, 'detail'])->name('article-detail');
Route::get('/careers', [CareerController::class, 'index'])->name('career');
Route::get('/careers/{slug_eng}', [CareerController::class, 'detail'])->name('career-detail');
Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::prefix('id')
    ->middleware(ChangeLocal::class)
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home.id');
        Route::get('/our-team', [TeamController::class, 'index'])->name('team.id');
        Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail.id');
        Route::get('/our-services', [ServiceController::class, 'index'])->name('service.id');
        Route::get('/our-services/{slug}', [ServiceController::class, 'detail'])->name('service-detail.id');
        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.id');
        Route::get('/articles/{slug}', [ArticleController::class, 'detail'])->name('article-detail.id');
        Route::get('/careers', [CareerController::class, 'index'])->name('career.id');
        Route::get('/careers/{slug}', [CareerController::class, 'detail'])->name('career-detail.id');
        Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax.id');
        Route::get('/contact', [ContactController::class, 'index'])->name('contact.id');
});

Route::prefix('jp')
    ->middleware(ChangeLocal::class)
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home.jp');
        Route::get('/our-team', [TeamController::class, 'index'])->name('team.jp');
        Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail.jp');
        Route::get('/our-services', [ServiceController::class, 'index'])->name('service.jp');
        Route::get('/our-services/{slug_jpn}', [ServiceController::class, 'detail'])->name('service-detail.jp');
        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.jp');
        Route::get('/articles/{slug_jpn}', [ArticleController::class, 'detail'])->name('article-detail.jp');
        Route::get('/careers', [CareerController::class, 'index'])->name('career.jp');
        Route::get('/careers/{slug_jpn}', [CareerController::class, 'detail'])->name('career-detail.jp');
        Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax.jp');
        Route::get('/contact', [ContactController::class, 'index'])->name('contact.jp');
});

Route::prefix('admin')
    ->middleware('auth')
    ->group(function () {
        Route::resource('hero', HeroController::class);
        Route::resource('stat', StatController::class);
        Route::resource('services', AdminServiceController::class);
        Route::resource('articles', AdminArticleController::class);
        Route::resource('article-category', ArticleCategoryController::class);
        Route::resource('tax-event', TaxEventController::class);
        Route::resource('team', AdminTeamController::class);
        Route::resource('page', PageController::class);
        Route::resource('career', AdminCareerController::class);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
