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
        'slug',
        'slug_eng',
        'slug_jpn',
        'description',
        'description_eng',
        'description_jpn',
        'SEO_title',
        'SEO_title_eng',
        'SEO_title_jpn',
        'meta_description',
        'meta_description_eng',
        'meta_description_jpn'

    ];
}
