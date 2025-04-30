<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Service;
use App\Models\TaxEvent;
use App\Models\subscribe;
use App\Models\HeroSlider;
use Illuminate\Http\Request;
use App\Models\CompanyProfile;
use App\Models\ComproDownloader;
use App\Models\ServiceCategory;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function index()
    {
        // Cache the page data for 60 minutes
        $page = Cache::remember('home_page', 3600, function () {
            return Page::select('id', 'description', 'description_eng', 'description_jpn', 'description_ch', 'SEO_title', 'SEO_title_eng', 'SEO_title_jpn', 'SEO_title_ch')->findOrFail(1);
        });

        // Cache heroes, stats, and categorized services
        $heroes = Cache::remember('home_heroes', 3600, function () {
            return HeroSlider::select('id', 'hero')->get();
        });

        $stats = Cache::remember('home_stats', 3600, function () {
            return Stat::select('id', 'value', 'head', 'head_eng', 'head_jpn', 'head_ch')->get();
        });

        $catogorizedservices = Cache::remember('home_categorized_services', 60, function () {
            return ServiceCategory::with('services')->get();
        });

        $unCatogorizedservices = Cache::remember('home_uncategorized_services', 60, function () {
            return Service::whereNull('service_category_id')->select('id', 'title', 'title_eng', 'title_jpn', 'title_ch', 'slug', 'slug_eng', 'slug_jpn', 'slug_ch')->get();
        });

        // Cache articles and events
        $articles = Cache::remember('home_articles', 60, function () {
            return Article::latest()
                ->take(4)
                ->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail', 'created_at')
                ->get();
        });

        $events = Cache::remember('home_events', 60, function () {
            return TaxEvent::latest()
                ->take(4)
                ->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')
                ->get();
        });

        // Return the data to the Inertia view
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "catogorizedservices" => $catogorizedservices,
            "unCatogorizedservices" => $unCatogorizedservices,
            "articles" => $articles,
            "events" => $events,
            "page" => $page
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $compro = CompanyProfile::orderBy('updated_at', 'desc')->first();
        $path = asset("storage/" . $compro->compro);
        ComproDownloader::create($data);
        return redirect()->back()->with([
            'message' => $path,
            'type' => 'success'
        ]);
    }

    public function subscribe(Request $request)
    {
        $data = $request->all();
        subscribe::create($data);
        return redirect()->back()->with([
            'message' => "Thanks for the subscription",
            'type' => 'success'
        ]);
    }
}
