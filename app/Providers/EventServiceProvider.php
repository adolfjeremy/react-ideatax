<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        // Invalidasi SSR cache jika ada model yang ditambah/diubah/dihapus (misal Publish artikel baru)
        Event::listen(['eloquent.saved: App\Models\*', 'eloquent.deleted: App\Models\*'], function ($event, $models) {
            \Illuminate\Support\Facades\Cache::increment('ssr_cache_version');
        });

        // Mendaftarkan HomeCacheObserver untuk invalidasi cache halaman Home
        $modelsToObserve = [
            \App\Models\Page::class,
            \App\Models\HeroSlider::class,
            \App\Models\Stat::class,
            \App\Models\ServiceCategory::class,
            \App\Models\TaxUpdate::class,
            \App\Models\Article::class,
            \App\Models\Department::class,
            \App\Models\Advisory::class,
            \App\Models\Regulation::class,
            \App\Models\TaxEvent::class,
            \App\Models\CompanyProfile::class,
        ];

        foreach ($modelsToObserve as $model) {
            $model::observe(\App\Observers\HomeCacheObserver::class);
        }
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
