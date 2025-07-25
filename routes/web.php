<?php

use App\Http\Controllers\Admin\AdminArticleController;
use App\Http\Controllers\Admin\AdminCareerController;
use App\Http\Controllers\Admin\AdminTeamController;
use App\Http\Controllers\Admin\ArticleCategoryController;
use App\Http\Controllers\Admin\CompanyProfileController;
use App\Http\Controllers\Admin\ConsultationMeetingController;
use App\Http\Controllers\Admin\HeroController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PhotoGaleryController;
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
use App\Http\Controllers\Admin\SubscribeController;
use App\Http\Controllers\Admin\TaxEventController;
use App\Http\Controllers\Admin\TaxUpdateController as AdminTaxUpdateController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\LocalizationController;
use App\Http\Controllers\Sp2dkController;
use App\Http\Controllers\TaxAuditController;
use App\Http\Controllers\TaxReportController;
use App\Http\Controllers\TaxRefundController;

use App\Http\Controllers\TaxEventController as ControllersTaxEventController;
use App\Http\Controllers\TaxPlanningController;
use App\Http\Controllers\TaxUpdateController;
use App\Http\Controllers\UserLoginController;
use App\Http\Controllers\UserRegisterController;
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

Route::get('guest/login', [UserLoginController::class, 'create'])->name('user-login');
Route::post('guest/login', [UserLoginController::class, 'store'])->name('user-login-post');

Route::get('guest/register', [UserRegisterController::class, 'create'])->name('user-register');
Route::post('guest/register', [UserRegisterController::class, 'store'])->name('user-register-post');

Route::get('guest/login/google', [GoogleAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('guest/login/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
Route::post('guest/sign-out', [UserLoginController::class, 'destroy'])->name('user-logout');

Route::post('/articles/{id}/like', [ArticleController::class, 'likeArticle'])->middleware('auth')->name('articles-like');
Route::post('/articles/comment', [ArticleController::class, 'comment'])->middleware('auth')->name('articles-comment');
Route::delete('/articles/comment/delete/{id}', [ArticleController::class, 'destroy'])->middleware('auth')->name('comment-delete');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/', [HomeController::class, 'store'])->name('home-store')->middleware(\Illuminate\Http\Middleware\HandleCors::class);
Route::post('/subscribe', [HomeController::class, 'subscribe'])->name('home-subscribe');
Route::get('/our-team', [TeamController::class, 'index'])->name('team');
Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail');

Route::get('/our-services', [ServiceController::class, 'index'])->name('service');
Route::get('/our-services/{slug_eng}', [ServiceController::class, 'detail'])->name('service-detail');
Route::get('/our-service/tax-audit-assistance', [TaxAuditController::class, 'detail'])->name('tax-audit');
Route::get('/our-service/annual-tax-return-reporting-service-for-corporations-and-individuals', [TaxReportController::class, 'index'])->name('tax-report');
Route::get('/our-service/tax-refund-assistance', [TaxRefundController::class, 'index'])->name('tax-refund');
Route::get('/our-service/sp2dk-assistance', [Sp2dkController::class, 'index'])->name('sp2dk');
Route::get('/our-service/tax-planning', [TaxPlanningController::class, 'index'])->name('tax-planning');

Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
Route::get('/articles/{slug_eng}', [ArticleController::class, 'detail'])->name('article-detail');
Route::get('/articles/event/{slug_eng}', [ControllersTaxEventController::class, 'detail'])->name('event-detail');

Route::get('/tax-updates', [TaxUpdateController::class, 'index'])->name('updates');
Route::get('/tax-updates/{slug_eng}', [TaxUpdateController::class, 'detail'])->name('update-detail');

Route::get('/careers', [CareerController::class, 'index'])->name('career');
Route::get('/careers/{slug_eng}', [CareerController::class, 'detail'])->name('career-detail');
Route::post('/careers/{slug_eng}', [CareerController::class, 'apply'])->name('career-apply');
Route::get('/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact-store');

Route::prefix('id')
    ->middleware(ChangeLocal::class)
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home.id');
        Route::get('/our-team', [TeamController::class, 'index'])->name('team.id');
        Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail.id');

        Route::get('/our-services', [ServiceController::class, 'index'])->name('service.id');
        Route::get('/our-services/{slug}', [ServiceController::class, 'detail'])->name('service-detail.id');
        Route::get('/our-service/bantuan-pemeriksaan-pajak', [TaxAuditController::class, 'detail'])->name('tax-audit.id');
        Route::get('/our-service/layanan-pelaporan-spt-tahunan-badan-dan-pribadi', [TaxReportController::class, 'index'])->name('tax-report.id');
        Route::get('/our-service/bantuan-pengembalian-pajak', [TaxRefundController::class, 'index'])->name('tax-refund.id');
        Route::get('/our-service/pendampingan-surat-permintaan-penjelasan-data-danatau-informasi-sp2dk', [Sp2dkController::class, 'index'])->name('sp2dk.id');
        Route::get('/our-service/perencanaan-pajak', [TaxPlanningController::class, 'index'])->name('tax-planning.id');

        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.id');
        Route::get('/articles/{slug}', [ArticleController::class, 'detail'])->name('article-detail.id');
        Route::get('/articles/event/{slug}', [ControllersTaxEventController::class, 'detail'])->name('event-detail.id');

        Route::get('/tax-updates', [TaxUpdateController::class, 'index'])->name('updates.id');
        Route::get('/tax-updates/{slug}', [TaxUpdateController::class, 'detail'])->name('update-detail.id');

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
        Route::get('/our-service/zeimu-kansa-sapoto', [TaxAuditController::class, 'detail'])->name('tax-audit.jp');
        Route::get('/our-service/shui-jin-nohuan-fu-sapoto', [TaxRefundController::class, 'index'])->name('tax-refund.jp');
        Route::get('/our-service/fa-ren-oyobige-ren-xiang-kenian-jian-na-shui-shen-gao-sptsabisu', [TaxReportController::class, 'index'])->name('tax-report.jp');
        Route::get('/our-service/sp2dkdui-ying-zhi-yuan', [Sp2dkController::class, 'index'])->name('sp2dk.jp');
        Route::get('/our-service/tax-planning', [TaxPlanningController::class, 'index'])->name('tax-planning.jp');

        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.jp');
        Route::get('/articles/{slug_jpn}', [ArticleController::class, 'detail'])->name('article-detail.jp');
        Route::get('/articles/event/{slug_jpn}', [ControllersTaxEventController::class, 'detail'])->name('event-detail.jp');

        Route::get('/tax-updates', [TaxUpdateController::class, 'index'])->name('updates.jp');
        Route::get('/tax-updates/{slug_jpn}', [TaxUpdateController::class, 'detail'])->name('update-detail.jp');

        Route::get('/careers', [CareerController::class, 'index'])->name('career.jp');
        Route::get('/careers/{slug_jpn}', [CareerController::class, 'detail'])->name('career-detail.jp');
        Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax.jp');
        Route::get('/contact', [ContactController::class, 'index'])->name('contact.jp');
    });

Route::prefix('zh-CN')
    ->middleware(ChangeLocal::class)
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home.ch');
        Route::get('/our-team', [TeamController::class, 'index'])->name('team.ch');
        Route::get('/our-team/{slug}', [TeamController::class, 'detail'])->name('team-detail.ch');
        Route::get('/our-services', [ServiceController::class, 'index'])->name('service.ch');
        Route::get('/our-services/{slug_ch}', [ServiceController::class, 'detail'])->name('service-detail.ch');
        Route::get('/our-service/xiezhu-shuiwu-jiancha', [TaxAuditController::class, 'detail'])->name('tax-audit.ch');
        Route::get('/our-service/退税', [TaxRefundController::class, 'index'])->name('tax-refund.ch');
        Route::get('/our-service/年度企业和个人SPT申报服务', [TaxReportController::class, 'index'])->name('tax-report.ch');
        Route::get('/our-service/sp2dk-assistance', [Sp2dkController::class, 'index'])->name('sp2dk.ch');
        Route::get('/our-service/tax-planning', [TaxPlanningController::class, 'index'])->name('tax-planning.ch');

        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.ch');
        Route::get('/articles/{slug_ch}', [ArticleController::class, 'detail'])->name('article-detail.ch');

        Route::get('/tax-updates', [TaxUpdateController::class, 'index'])->name('updates.ch');
        Route::get('/tax-updates/{slug_ch}', [TaxUpdateController::class, 'detail'])->name('update-detail.ch');

        // Route::get('/articles/event/{slug_jpn}', [ControllersTaxEventController::class, 'detail'])->name('event-detail.jp');
        // Route::get('/careers', [CareerController::class, 'index'])->name('career.jp');
        // Route::get('/careers/{slug_jpn}', [CareerController::class, 'detail'])->name('career-detail.jp');
        // Route::get('/careers/life-at-ideatax', [CareerController::class, 'life'])->name('life-at-ideatax.jp');
        Route::get('/contact', [ContactController::class, 'index'])->name('contact.ch');
    });

Route::prefix('admin')
    ->middleware('auth', "isAdmin")
    ->group(function () {
        Route::resource('hero', HeroController::class);
        Route::resource('stat', StatController::class);
        Route::resource('services', AdminServiceController::class);
        Route::resource('articles', AdminArticleController::class);
        Route::resource('updates', AdminTaxUpdateController::class);
        Route::resource('article-category', ArticleCategoryController::class);
        Route::resource('tax-event', TaxEventController::class);
        Route::resource('team', AdminTeamController::class);
        Route::resource('page', PageController::class);
        Route::resource('career', AdminCareerController::class);
        Route::resource('photo-galery', PhotoGaleryController::class);
        Route::resource('company-profile', CompanyProfileController::class);
        Route::resource('consultation-meeting', ConsultationMeetingController::class);
        Route::resource('subscriber', SubscribeController::class);
    });



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
