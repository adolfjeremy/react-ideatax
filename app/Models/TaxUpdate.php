<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxUpdate extends Model
{
    protected $fillable = [
        'photo',
        'thumbnail',
        'title',
        'title_eng',
        'title_jpn',
        'slug',
        'slug_eng',
        'slug_jpn',
        'body',
        'body_eng',
        'body_jpn',
        'SEO_title',
        'SEO_title_eng',
        'SEO_title_jpn',
        'description',
        'description_eng',
        'description_jpn',
        "tax_update_categories_id",
        'user_id',
        'pdf',
    ];

    public function taxUpdateCategory()
    {
        return $this->belongsTo(TaxUpdateCategory::class, "tax_update_categories_id", "id");
    }

    public static function truncateRichText($htmlContent, $maxLength = 250)
    {
        $plainText = strip_tags($htmlContent);
        $plainText = trim(preg_replace('/\s+/', ' ', $plainText));

        if (mb_strlen($plainText) > $maxLength) {
            return mb_substr($plainText, 0, $maxLength) . '...';
        }

        return $plainText;
    }
}
