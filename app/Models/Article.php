<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'photo',
        'thumbnail',
        'author',
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
        'meta_description',
        'meta_description_eng',
        'meta_description_jpn',
        'article_categories_id',
    ];

    public function articleCategory()
    {
        return $this->belongsTo(ArticleCategory::class, "article_categories_id", "id");
    }
    public function likes()
    {
        return $this->hasMany(Like::class);
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
