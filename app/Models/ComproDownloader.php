<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComproDownloader extends Model
{
    protected $fillable = [
        'name', 'email', 'tel', 'company',
    ];
}
