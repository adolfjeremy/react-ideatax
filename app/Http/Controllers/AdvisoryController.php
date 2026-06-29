<?php

namespace App\Http\Controllers;

use App\Models\Advisory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdvisoryController extends Controller
{
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

        $item = Advisory::query()
            ->where(function($query) use ($slugColumn, $id) {
                $query->where($slugColumn, $id)
                      ->orWhere('slug_eng', $id);
            })
            ->select(
                'id',
                \Illuminate\Support\Facades\DB::raw("COALESCE($titleColumn, title_eng) as title"),
                \Illuminate\Support\Facades\DB::raw("COALESCE($bodyColumn, body_eng) as body"),
                \Illuminate\Support\Facades\DB::raw("COALESCE($seoTitleColumn, SEO_title_eng) as SEO_title"),
                \Illuminate\Support\Facades\DB::raw("COALESCE($metaDescriptionColumn, meta_description_eng) as meta_description"),
                'slug',
                'slug_eng',
                'slug_jpn',
                'team_id',
                'created_at'
            )
            ->with(['team' => function($q) {
                $q->select('id', 'name', 'position_id', 'profile_picture')->with('position:id,name_eng');
            }])
            ->firstOrFail();

        // 🔹 Previous
        $previousAdvisory = Advisory::query()
            ->where('id', '<', $item->id)
            ->select('id', 'slug', 'slug_eng', 'slug_jpn')
            ->orderBy('id', 'desc')
            ->first();

        // 🔹 Next
        $nextAdvisory = Advisory::query()
            ->where('id', '>', $item->id)
            ->select('id', 'slug', 'slug_eng', 'slug_jpn')
            ->orderBy('id', 'asc')
            ->first();

        return Inertia::render('Advisory/Detail/AdvisoryDetail', [
            "item" => $item,
            "previousAdvisory" => $previousAdvisory,
            "nextAdvisory" => $nextAdvisory
        ]);
    }
}
