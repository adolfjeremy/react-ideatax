<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'title', 
        'SEO_title', 
        'SEO_title_eng', 
        'SEO_title_jpn', 
        'description', 
        'description_eng', 
        'description_jpn'
    ];
}
