<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\HeroSlider;
use App\Models\Service;
use App\Models\Stat;
use App\Models\TaxEvent;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $heroes = HeroSlider::all();
        $stats = Stat::all();
        $services = Service::select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn')->get();
        $articles = Article::select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail', 'created_at')->get();
        $events = TaxEvent::select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')->get();
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "services" => $services,
            "articles" => $articles,
            "events" => $events,
        ]);
    }
}
