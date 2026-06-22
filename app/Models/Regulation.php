<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Regulation extends Model
{
    protected $fillable = [
        'title', 
        'title_eng', 
        'title_jp', 
        'slug', 
        'slug_eng', 
        'slug_jp', 
        'document'
    ];
}
