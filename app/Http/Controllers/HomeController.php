<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Service;
use App\Models\TaxEvent;
use App\Models\HeroSlider;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(1);
        $heroes = HeroSlider::all();
        $stats = Stat::all();
        $services = Service::select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn')->get();
        $articles = Article::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail', 'created_at')->get();
        $events = TaxEvent::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')->get();
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "services" => $services,
            "articles" => $articles,
            "events" => $events,
            "page" => $page
        ]);
    }
}
