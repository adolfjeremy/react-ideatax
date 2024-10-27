<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $latest = Article::latest()->take(5)->get();
        $articles = Article::latest()->get();
        return Inertia::render('Article/Article', [
            "latest" => $latest,
            "articles" => $articles
        ]);
    }
    public function detail($id)
    {
        if(app()->getLocale() == "en") {
            $item = Article::where('slug_eng', $id)->firstOrFail();
        } else if(app()->getLocale() == "id") {
            $item = Article::where('slug', $id)->firstOrFail();
        } else {
            $item = Article::where('slug_jpn', $id)->firstOrFail();
        }

        return Inertia::render('Article/Detail/ArticleDetail', [
            "item" => $item
        ]);
    }
}
