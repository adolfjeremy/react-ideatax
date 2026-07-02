<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSlider extends Model
{
    protected $fillable = [
        'hero', 
        'title', 
        'title_eng', 
        'title_jpn', 
        'title_ch', 
        'subtitle', 
        'subtitle_eng', 
        'subtitle_jpn', 
        'subtitle_ch',
        'advisory_id',
        'article_id',
    ];

    public function advisory()
    {
        return $this->belongsTo(Advisory::class);
    }

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
