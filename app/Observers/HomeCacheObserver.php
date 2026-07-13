<?php

namespace App\Observers;

use Illuminate\Support\Facades\Cache;

class HomeCacheObserver
{
    /**
     * Handle the Model "saved" event.
     */
    public function saved($model): void
    {
        $this->clearHomeCache($model);
    }

    /**
     * Handle the Model "deleted" event.
     */
    public function deleted($model): void
    {
        $this->clearHomeCache($model);
    }

    /**
     * Clear specific cache based on the model instance.
     */
    private function clearHomeCache($model): void
    {
        $locales = ['id', 'en', 'jp'];

        if ($model instanceof \App\Models\Page) {
            Cache::forget('home_page');
        }

        if ($model instanceof \App\Models\HeroSlider) {
            Cache::forget('home_heroes');
        }

        if ($model instanceof \App\Models\Stat) {
            Cache::forget('home_stats');
        }

        if ($model instanceof \App\Models\ServiceCategory) {
            Cache::forget('home_categorized_services');
        }

        if ($model instanceof \App\Models\Department) {
            Cache::forget('home_departments');
        }

        if ($model instanceof \App\Models\TaxEvent) {
            Cache::forget('home_events');
        }

        if ($model instanceof \App\Models\CompanyProfile) {
            Cache::forget('home_compro');
        }

        foreach ($locales as $locale) {
            if ($model instanceof \App\Models\TaxUpdate) {
                Cache::forget("home_updates_{$locale}");
            }
            if ($model instanceof \App\Models\Article) {
                Cache::forget("home_articles_{$locale}");
            }
            if ($model instanceof \App\Models\Advisory) {
                Cache::forget("home_advisories_{$locale}");
            }
            if ($model instanceof \App\Models\Regulation) {
                Cache::forget("home_regulations_{$locale}");
            }
        }
    }
}
