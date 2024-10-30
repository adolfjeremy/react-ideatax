<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhotoGalery extends Model
{
    protected $fillable = [
        'title',
        'title_eng',
        'title_jpn',
        'image',
        'height',
        'width',
    ];
}
