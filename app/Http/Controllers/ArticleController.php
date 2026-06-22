<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Page;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\TaxUpdate;
use App\Models\TaxUpdateCategory;
use App\Models\Comment;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
{
    $search = $request->input('search');
    $categoryId = $request->input('categoryId');

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

    // Page
    $page = Page::select('id', 'title')->findOrFail(5);

    // 🔹 Latest
    $latestArticle = Article::query()
        ->select(
            'id',
            "$titleColumn as title",
            'slug',
            'slug_eng',
            'slug_jpn',
            'photo',
            'article_categories_id'
        )
        ->latest()
        ->take(3)
        ->get();

    $latestUpdate = TaxUpdate::query()
        ->select(
            'id',
            "$titleColumn as title",
            'slug',
            'slug_eng',
            'slug_jpn',
            'photo',
            'tax_update_categories_id'
        )
        ->latest()
        ->take(3)
        ->get();

    $latest = $latestArticle->merge($latestUpdate);

    // 🔹 Articles
    $articles = Article::query()
        ->when($search, function ($query) use ($search, $titleColumn) {
            $query->where($titleColumn, 'like', '%' . $search . '%');
        })
        ->when($categoryId, function ($query) use ($categoryId) {
            $query->where('article_categories_id', $categoryId);
        })
        ->select(
            'id',
            "$titleColumn as title",
            "$bodyColumn as body",
            'slug',
            'slug_eng',
            'slug_jpn',
            'created_at',
            'thumbnail'
        )
        ->latest()
        ->paginate(9)
        ->withQueryString();

    $articles->through(function ($article) {
        $article->body = Article::truncateRichText($article->body);
        return $article;
    });

    $updates = TaxUpdate::query()
        ->when($search, function ($query) use ($search, $titleColumn) {
            $query->where($titleColumn, 'like', '%' . $search . '%');
        })
        ->when($categoryId, function ($query) use ($categoryId) {
            $query->where('article_categories_id', $categoryId);
        })
        ->select(
            'id',
            "$titleColumn as title",
            "$bodyColumn as body",
            'slug',
            'slug_eng',
            'slug_jpn',
            'created_at',
            'thumbnail'
        )
        ->latest()
        ->paginate(9)
        ->withQueryString();
    $updates->through(function ($update) {
        $update->body = Article::truncateRichText($update->body);
        return $update;
    });
     

    $titleCategory = 'title';

    // 🔹 Categories (cache optional)
    $article_categories = ArticleCategory::select('id', "$titleCategory as name")
            ->orderBy('title')
            ->get();

    $taxupdate_categories = TaxUpdateCategory::select('id', "$titleCategory as name")
            ->orderBy('title')
            ->get();
    $categories = $article_categories->merge($taxupdate_categories);

    return Inertia::render('Article/Article', [
        "latest" => $latest,
        "categories" => $categories,
        "articles" => $articles,
        "updates" => $updates,
        "page" => $page,
        "filters" => [
            "search" => $search,
            "categoryId" => $categoryId,
        ],
    ]);
}
    public function detail($id)
{
    $locale = app()->getLocale();

    $slugColumn = match ($locale) {
        'id' => 'slug',
        'en' => 'slug_eng',
        'jp' => 'slug_jpn',
        default => 'slug_eng',
    };

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

    $seoTitleColumn = match ($locale) {
        'id' => 'SEO_title',
        'en' => 'SEO_title_eng',
        'jp' => 'SEO_title_jpn',
        default => 'SEO_title_eng',
    };

    $metaDescriptionColumn = match ($locale) {
        'id' => 'meta_description',
        'en' => 'meta_description_eng',
        'jp' => 'meta_description_jpn',
        default => 'meta_description_eng',
    };

    // 🔹 Main Article (ambil seperlunya)
    $item = Article::query()
        ->where($slugColumn, $id)
        ->select(
            'id',
            "$titleColumn as title",
            "$bodyColumn as body",
            "$seoTitleColumn as SEO_title",
            "$metaDescriptionColumn as meta_description",
            'slug',
            'slug_eng',
            'slug_jpn',
            'photo',
            'article_categories_id',
            'created_at'
        )
        ->withCount('likes')
        ->with(['articleCategory:id,title'])
        ->firstOrFail();

    // 🔹 Previous
    $previousArticle = Article::query()
        ->where('id', '<', $item->id)
        ->select(
            'id',
            'slug',
            'slug_eng',
            'slug_jpn'
        )
        ->orderBy('id', 'desc')
        ->first();

    // 🔹 Next
    $nextArticle = Article::query()
        ->where('id', '>', $item->id)
        ->select(
            'id',
            'slug',
            'slug_eng',
            'slug_jpn'
        )
        ->orderBy('id', 'asc')
        ->first();

    // 🔹 Comments (JANGAN ambil semua)
    $comments = Comment::query()
        ->where("article_id", $item->id)
        ->select('id', 'user_id', 'comment', 'created_at')
        ->with(['user:id,name'])
        ->latest()->get(); // ⬅️ penting banget

    return Inertia::render('Article/Detail/ArticleDetail', [
        "item" => $item,
        "comments" => $comments,
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
