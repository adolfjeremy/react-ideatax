<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advisory extends Model
{
    protected $fillable = [
        'title', 
        'title_eng', 
        'title_jpn',
        'subtitle', 
        'subtitle_eng', 
        'subtitle_jpn', 
        'slug', 
        'slug_eng', 
        'slug_jpn',
        'body',
        'body_eng',
        'body_jpn',
        'highlight',
        'highlight_eng',
        'highlight_jpn',
        'SEO_title',
        'SEO_title_eng',
        'SEO_title_jpn',
        'meta_description',
        'meta_description_eng',
        'meta_description_jpn',
        'team_id',
    ];
    public function team()
    {
        return $this->belongsTo(Team::class, "team_id", "id");
    }
}
