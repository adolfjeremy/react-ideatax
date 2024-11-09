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
        if(app()->getLocale() == "en") {
            $item = TaxEvent::where('slug_eng', $id)->firstOrFail();
        } else if(app()->getLocale() == "id") {
            $item = TaxEvent::where('slug', $id)->firstOrFail();
        } else {
            $item = TaxEvent::where('slug_jpn', $id)->firstOrFail();
        }
        $events = TaxEvent::where('id', '!=', $item->id)->latest()->take(5)->get();
        $articles = Article::latest()->take(6)->get();
        return Inertia::render('TaxEvent/TaxEventDetail', [
            "item" => $item,
            "events" => $events,
            "articles" => $articles
        ]);
    }
}
