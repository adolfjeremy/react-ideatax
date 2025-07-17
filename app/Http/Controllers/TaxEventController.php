<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\TaxEvent;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TaxEventController extends Controller
{
    public function index()
    {
        return Inertia::render('Services/TaxEvent/TaxEvent');
    }

    public function detail($id)
    {
        if (app()->getLocale() == "en") {
            $item = TaxEvent::where('slug_eng', $id)->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = TaxEvent::where('slug', $id)->firstOrFail();
        } else {
            $item = TaxEvent::where('slug_jpn', $id)->firstOrFail();
        }
        $events = TaxEvent::where('id', '!=', $item->id)->latest()->take(5)->get();

        $articles = Article::select('id', 'title', 'title_eng', 'title_jpn', 'body', 'body_eng', 'body_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($article) {
                $article->body = Article::truncateRichText($article->body);
                $article->body_eng = Article::truncateRichText($article->body_eng);
                $article->body_jpn = Article::truncateRichText($article->body_jpn);
                return $article;
            });
        return Inertia::render('TaxEvent/TaxEventDetail', [
            "item" => $item,
            "events" => $events,
            "articles" => $articles
        ]);
    }
}
