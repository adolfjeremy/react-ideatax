<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $fillable = [
        'name', 'name_eng', 'name_jpn', 'name_ch', 'order'
    ];
}
