<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
{
    protected $fillable = [
        'title', 
        'SEO_title', 
        'description_eng', 
        'description', 
        'description_jpn',
        'slug'
    ];

    public function Article()
    {
        return $this->hasMany(Article::class);
    }
}
