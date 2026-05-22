<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    protected $fillable = ['team_id', 'title', 'institution', 'year'];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
