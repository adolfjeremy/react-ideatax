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
    ];
}
