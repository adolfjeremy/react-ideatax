<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name', 
        'slug', 
        'position', 
        'linkedin', 
        'email',
        'phone',
        'profile_picture', 
        'photo',
        'biography', 
        'biography_eng', 
        'biography_jpn', 
        'area_of_expertise', 
        'area_of_expertise_eng', 
        'area_of_expertise_jpn', 
        'SEO_title', 
        'SEO_title_eng', 
        'SEO_title_jpn', 
        'description', 
        'description_eng', 
        'description_jpn',
    ];
}
