<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        'name',
        'name_eng',
        'name_jpn',
        'name_ch',
        'order'
    ];

    public function teams()
    {
        return $this->hasMany(Team::class)->orderBy('order', 'asc');
    }
}
