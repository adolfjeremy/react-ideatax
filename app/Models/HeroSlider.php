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
        'button_text', 
        'button_text_eng', 
        'button_text_jpn', 
        'button_text_ch', 
        'button_link', 
        'button_link_eng', 
        'button_link_jpn', 
        'button_link_ch'
    ];
}
