<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name', 
        'slug', 
        'position',
        'position_id',
        'position_jp',
        'position_ch',
        'linkedin', 
        'email',
        'phone',
        'profile_picture', 
        'photo',
        'biography', 
        'biography_eng', 
        'biography_jpn', 
        'biography_ch',
        'area_of_expertise', 
        'area_of_expertise_eng', 
        'area_of_expertise_jpn', 
        'area_of_expertise_ch',
        'SEO_title', 
        'SEO_title_eng', 
        'SEO_title_jpn', 
        'SEO_title_ch',
        'description', 
        'description_eng', 
        'description_jpn', 
        'description_ch',
    ];
}
