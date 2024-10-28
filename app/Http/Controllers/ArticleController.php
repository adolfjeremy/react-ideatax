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
        $articles = Article::latest()->simplePaginate(15);
        return Inertia::render('Article/Article', [
            "latest" => $latest,
            "articles" => $articles
        ]);
    }
    public function detail($id)
    {
        if(app()->getLocale() == "en") {
            $item = Article::where('slug_eng', $id)->with("articleCategory")->firstOrFail();
        } else if(app()->getLocale() == "id") {
            $item = Article::where('slug', $id)->with("articleCategory")->firstOrFail();
        } else {
            $item = Article::where('slug_jpn', $id)->with("articleCategory")->firstOrFail();
        }

        return Inertia::render('Article/Detail/ArticleDetail', [
            "item" => $item
        ]);
    }
}
