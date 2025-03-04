<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'image',
        'title',
        'title_eng',
        'title_jpn',
        'title_ch',
        'slug',
        'slug_eng',
        'slug_jpn','slug_ch',
        'description',
        'description_eng',
        'description_jpn',
        'description_ch',
        'SEO_title',
        'SEO_title_eng',
        'SEO_title_jpn',
        'SEO_title_ch',
        'meta_description',
        'meta_description_eng',
        'meta_description_jpn',
        'meta_description_ch',
    ];
}
