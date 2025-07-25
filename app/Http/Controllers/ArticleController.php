<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Page;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\Comment;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $categoryId = $request->input('categoryId');

        $locale = app()->getLocale(); // 'id', 'en', 'jp', atau 'ch'

        // mapping locale ke nama kolom title
        $titleColumn = match ($locale) {
            'id' => 'title',
            'en' => 'title_eng',
            'jp' => 'title_jpn',
            default => 'title_eng',
        };

        $page = Page::findOrFail(5);
        $latest = Article::select('id', 'title', 'title_eng', 'title_jpn', 'body', 'body_eng', 'body_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($article) {
                $article->body = Article::truncateRichText($article->body);
                $article->body_eng = Article::truncateRichText($article->body_eng);
                $article->body_jpn = Article::truncateRichText($article->body_jpn);
                return $article;
            });
        $articles = Article::query()
            ->when($search, function ($query) use ($search, $titleColumn) {
                $query->where($titleColumn, 'like', '%' . $search . '%');
            })
            ->when($categoryId, function ($query, $categoryId) {
                $query->where('article_categories_id', $categoryId);
            })
            ->select('id', 'title', 'title_eng', 'title_jpn', 'body', 'body_eng', 'body_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail')
            ->latest()
            ->paginate(9)
            ->withQueryString();

        $categories = ArticleCategory::select('id', 'title')
            ->orderBy('title')
            ->get();

        // Transformasi isi paginasi
        $articles->setCollection(
            $articles->getCollection()->map(function ($article) {
                $article->body = Article::truncateRichText($article->body);
                $article->body_eng = Article::truncateRichText($article->body_eng);
                $article->body_jpn = Article::truncateRichText($article->body_jpn);
                return $article;
            })
        );

        return Inertia::render('Article/Article', [
            "latest" => $latest,
            "categories" => $categories,
            "articles" => $articles,
            "page" => $page,
            'filters' => [  // Ini dia bagian pentingnya
                'search' => $search,
                'categoryId' => $categoryId,
            ],
        ]);
    }
    public function detail($id)
    {
        if (app()->getLocale() == "en") {
            $item = Article::where('slug_eng', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = Article::where('slug', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = Article::where('slug_jpn', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        } else {
            $item = Article::where('slug_eng', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        }

        // else if(app()->getLocale() == "zh-CN"){
        //     $item = Article::where('slug_ch', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        // }

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

    public function likeArticle($id)
    {
        $user = auth()->user();
        $like = Like::where('user_id', $user->id)->where('article_id', $id)->first();
        if ($like) {
            // Jika sudah like, hapus like (dislike)
            $like->delete();
            return redirect()->back();
        } else {
            // Jika belum like, tambahkan like
            Like::create([
                'user_id' => $user->id,
                'article_id' => $id,
            ]);
            return redirect()->back();
        }
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
