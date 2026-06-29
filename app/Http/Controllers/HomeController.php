<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\TaxUpdate;
use App\Models\Service;
use App\Models\TaxEvent;
use App\Models\subscribe;
use App\Models\HeroSlider;
use Illuminate\Http\Request;
use App\Models\CompanyProfile;
use App\Models\ComproDownloader;
use App\Models\ServiceCategory;
use App\Models\Department;
use App\Models\Advisory;
use App\Models\Regulation;

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
            return HeroSlider::all();
        });

        $stats = Cache::remember('home_stats', 3600, function () {
            return Stat::select('id', 'value', 'head', 'head_eng', 'head_jpn', 'head_ch')->get();
        });

        $catogorizedservices = Cache::remember('home_categorized_services', 60, function () {
            return ServiceCategory::with('services')->get();
        });

        $locale = app()->getLocale();

        $titleColumn = match ($locale) {
            'id' => 'title',
            'en' => 'title_eng',
            'jp' => 'title_jpn',
            default => 'title_eng',
        };

        $bodyColumn = match ($locale) {
            'id' => 'body',
            'en' => 'body_eng',
            'jp' => 'body_jpn',
            default => 'body_eng',
        };

        $slugColumn = match ($locale) {
            'id' => 'slug',
            'en' => 'slug_eng',
            'jp' => 'slug_jpn',
            default => 'slug_eng',
        };

        $highlightColumn = match ($locale) {
            'id' => 'highlight',
            'en' => 'highlight_eng',
            'jp' => 'highlight_jpn',
            default => 'highlight_eng',
        };

        $subtitleColumn = match ($locale) {
            'id' => 'subtitle',
            'en' => 'subtitle_eng',
            'jp' => 'subtitle_jpn',
            default => 'subtitle_eng',
        };

        $updates = TaxUpdate::query()
        ->select(
            'id',
            "$titleColumn as title",
            "$bodyColumn as body",
            'slug',
            'slug_eng',
            'slug_jpn',
            'updated_at',
            'thumbnail'
        )
        ->latest()
        ->take(3)
        ->get()
        ->map(function ($update) {
            $update->body = Article::truncateRichText($update->body);
            return $update;
        });

        // Cache articles and events
        $articles = Article::query()
        ->select(
            'id',
            "$titleColumn as title",
            "$bodyColumn as body",
            'slug',
            'slug_eng',
            'slug_jpn',
            'updated_at',
            'thumbnail'
        )
        ->latest()
        ->take(3)
        ->get()
        ->map(function ($article) {
            $article->body = Article::truncateRichText($article->body);
            return $article;
        });

        $departments = Department::orderBy('order', 'asc')->get();

        $advisories = Advisory::with('team.position')
        ->select(
            'id',
            \Illuminate\Support\Facades\DB::raw("COALESCE($titleColumn, title_eng) as title"),
            \Illuminate\Support\Facades\DB::raw("COALESCE($highlightColumn, highlight_eng) as highlight"),
            \Illuminate\Support\Facades\DB::raw("COALESCE($slugColumn, slug_eng) as slug"),
            'slug_eng',
            'slug_jpn',
            \Illuminate\Support\Facades\DB::raw("COALESCE($subtitleColumn, subtitle_eng) as subtitle"),
            'team_id'
        )
        ->latest()
        ->take(6)
        ->get();
        $regulations = Regulation::
        select(
            'id',
            'document',
            "$titleColumn as title",
            "$slugColumn as slug",
        )
        ->latest()
        ->take(10)
        ->get();

        $events = Cache::remember('home_events', 60, function () {
            return TaxEvent::latest()
                ->take(4)
                ->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')
                ->get();
        });

        $compro = CompanyProfile::orderBy('updated_at', 'desc')->first();

        // Return the data to the Inertia view
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "catogorizedservices" => $catogorizedservices,
            "articles" => $articles,
            "updates" => $updates,
            "events" => $events,
            "departments" => $departments,
            "advisories" => $advisories,
            "regulations" => $regulations,
            "page" => $page,
            "compro" => $compro,
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
