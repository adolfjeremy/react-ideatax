<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Page;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\TaxUpdate;
use App\Models\TaxUpdateCategory;
use App\Models\Regulation;
use App\Models\Comment;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    public function index(Request $request)
{
    // 1. Tangkap semua input filter dari frontend
    $search = $request->input('search');
    $publicationType = $request->input('publicationType', 'all'); // Tetap ditangkap untuk menjaga state frontend

    $articleCategory = $request->input('articleCategory');
    $articleCategoryId = ($articleCategory && $articleCategory !== 'all') ? $articleCategory : null;

    $taxUpdateCategory = $request->input('taxUpdateCategory');
    $taxUpdateCategoryId = ($taxUpdateCategory && $taxUpdateCategory !== 'all') ? $taxUpdateCategory : null;

    // 2. Lokalisasi Kolom secara Dinamis (Clean & Ringkas)
    $locale = app()->getLocale();
    $suffix = match ($locale) {
        'id' => '',
        'en' => '_eng',
        'jp' => '_jpn',
        default => '_eng',
    };

    $titleColumn = "title{$suffix}";
    $bodyColumn = "body{$suffix}";
    $slugColumn = "slug{$suffix}";

    // 3. Mengambil Data Page Statis
    $page = Page::select('id', 'title')->findOrFail(5);

    // 4. Slider Data "Latest" (Selalu di-load)
    $latestArticle = Article::select('id', "{$titleColumn} as title", 'slug', 'slug_eng', 'slug_jpn', 'photo', 'article_categories_id')
        ->latest()->take(3)->get();

    $latestUpdate = TaxUpdate::select('id', "{$titleColumn} as title", 'slug', 'slug_eng', 'slug_jpn', 'photo', 'tax_update_categories_id')
        ->latest()->take(3)->get();

    $latest = $latestArticle->merge($latestUpdate);

    // 5. 🔹 Query: ARTICLES (Selalu dieksekusi)
    $articles = Article::query()
        ->when($search, fn($q) => $q->where($titleColumn, 'like', "%{$search}%"))
        ->when($articleCategoryId, fn($q) => $q->where('article_categories_id', $articleCategoryId))
        ->select('id', "{$titleColumn} as title", "{$bodyColumn} as body", 'slug', 'slug_eng', 'slug_jpn', 'created_at', 'thumbnail')
        ->latest()->paginate(9)->withQueryString();

    $articles->through(function ($article) {
        $article->body = Article::truncateRichText($article->body);
        return $article;
    });

    // 6. 🔹 Query: TAX UPDATES (Selalu dieksekusi & Menggunakan Kategori yang Benar)
    $updates = TaxUpdate::query()
        ->when($search, fn($q) => $q->where($titleColumn, 'like', "%{$search}%"))
        ->when($taxUpdateCategoryId, fn($q) => $q->where('tax_update_categories_id', $taxUpdateCategoryId)) // Fixed Bug Mismatch Category!
        ->select('id', "{$titleColumn} as title", "{$bodyColumn} as body", 'slug', 'slug_eng', 'slug_jpn', 'created_at', 'thumbnail')
        ->latest()->paginate(9)->withQueryString();

    $updates->through(function ($update) {
        $update->body = Article::truncateRichText($update->body);
        return $update;
    });

    // 7. 🔹 Query: REGULATIONS / LIBRARY (Selalu dieksekusi)
    $regulations = Regulation::query()
        ->when($search, fn($q) => $q->where($titleColumn, 'like', "%{$search}%"))
        ->select('id', 'document', "{$titleColumn} as title", "{$slugColumn} as slug")
        ->latest()->paginate(9)->withQueryString();

    // 8. Data Master Kategori untuk Dropdown Pemilih
    $article_categories = ArticleCategory::select('id', "title as name")->orderBy('title')->get();
    $taxupdate_categories = TaxUpdateCategory::select('id', "title as name")->orderBy('title')->get();

    // 9. Kirim Payload ke Inertia View
    return Inertia::render('Article/Article', [
        "latest"               => $latest,
        "article_categories"   => $article_categories,
        "taxupdate_categories" => $taxupdate_categories,
        "articles"             => $articles,
        "updates"              => $updates,
        "regulations"          => $regulations,
        "page"                 => $page,
        "filters"              => [
            "search"            => $search,
            "publicationType"   => $publicationType,   // PENTING: Dikembalikan ke frontend agar Dropdown tidak reset
            "articleCategory"   => $articleCategory,   // PENTING: Sinkronisasi filter kategori artikel
            "taxUpdateCategory" => $taxUpdateCategory, // PENTING: Sinkronisasi filter kategori tax update
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

        $item = Comment::findOrFail($id);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Comment deleted successfully",
            'type' => 'success'
        ]);
    }
}
