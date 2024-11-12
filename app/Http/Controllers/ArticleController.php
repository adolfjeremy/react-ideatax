<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ArticleController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(5);
        $latest = Article::latest()->take(5)->get();
        $articles = Article::latest()->simplePaginate(9);
        return Inertia::render('Article/Article', [
            "latest" => $latest,
            "articles" => $articles,
            "page" => $page
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

        $previousArticle = Article::where('id', '<', $item->id)->orderBy('id', 'desc')->first();
        $nextArticle = Article::where('id', '>', $item->id)->orderBy('id', 'asc')->first();
        $comment = Comment::where("article_id", $item->id)->with("user")->latest()->get();

        return Inertia::render('Article/Detail/ArticleDetail', [
            "item" => $item,
            "comment" => $comment,
            "previousArticle" => $previousArticle,
            "nextArticle" => $nextArticle
        ]);
    }

    public function comment(Request $request)
    {
        $data = $request->all();
        Comment::create($data);

        return redirect()->back();
    }

    public function destroy($id)
    {
        $item = Comment::findOrFail($id);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Comment deleted successfully",
            'type' => 'success'
        ]);
    }
}
