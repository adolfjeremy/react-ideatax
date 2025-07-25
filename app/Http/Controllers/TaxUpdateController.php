<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaxUpdate;
use App\Models\Page;
use App\Models\TaxUpdateCategory;
use Inertia\Inertia;

class TaxUpdateController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $categoryId = $request->input('categoryId');
        $locale = app()->getLocale(); // 'id', 'en', 'jp', atau 'ch'
        $titleColumn = match ($locale) {
            'id' => 'title',
            'en' => 'title_eng',
            'jp' => 'title_jpn',
            default => 'title_eng',
        };

        $page = Page::findOrFail(5);
        $latest = TaxUpdate::select('id', 'title', 'title_eng', 'title_jpn', 'body', 'body_eng', 'body_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($update) {
                $update->body = TaxUpdate::truncateRichText($update->body);
                $update->body_eng = TaxUpdate::truncateRichText($update->body_eng);
                $update->body_jpn = TaxUpdate::truncateRichText($update->body_jpn);
                return $update;
            });
        $updates = TaxUpdate::query()
            ->when($search, function ($query) use ($search, $titleColumn) {
                $query->where($titleColumn, 'like', '%' . $search . '%');
            })
            ->when($categoryId, function ($query, $categoryId) {
                $query->where('tax_update_categories_id', $categoryId);
            })
            ->select('id', 'title', 'title_eng', 'title_jpn', 'body', 'body_eng', 'body_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail')
            ->latest()
            ->paginate(9)
            ->withQueryString();

        $categories = TaxUpdateCategory::select('id', 'title')
            ->orderBy('title')
            ->get();

        // Transformasi isi paginasi
        $updates->setCollection(
            $updates->getCollection()->map(function ($update) {
                $update->body = TaxUpdate::truncateRichText($update->body);
                $update->body_eng = TaxUpdate::truncateRichText($update->body_eng);
                $update->body_jpn = TaxUpdate::truncateRichText($update->body_jpn);
                return $update;
            })
        );

        return Inertia::render('Updates/TaxUpdates', [
            "latest" => $latest,
            "categories" => $categories,
            "updates" => $updates,
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
            $item = TaxUpdate::where('slug_eng', $id)->with("taxUpdateCategory")->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = TaxUpdate::where('slug', $id)->with("taxUpdateCategory")->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = TaxUpdate::where('slug_jpn', $id)->with("taxUpdateCategory")->firstOrFail();
        } else {
            $item = TaxUpdate::where('slug_eng', $id)->with("taxUpdateCategory")->firstOrFail();
        }

        // else if(app()->getLocale() == "zh-CN"){
        //     $item = Article::where('slug_ch', $id)->withCount('likes')->with("articleCategory")->firstOrFail();
        // }

        $previousArticle = TaxUpdate::where('id', '<', $item->id)->orderBy('id', 'desc')->first();
        $nextArticle = TaxUpdate::where('id', '>', $item->id)->orderBy('id', 'asc')->first();

        return Inertia::render('Updates/Detail/UpdateDetail', [
            "item" => $item,
            "previousArticle" => $previousArticle,
            "nextArticle" => $nextArticle
        ]);
    }
}
