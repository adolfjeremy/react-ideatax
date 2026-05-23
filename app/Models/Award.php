<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    protected $fillable = ['title', 'institution', 'year', 'image'];

    public function teams()
    {
        return $this->belongsToMany(Team::class, 'award_team', 'award_team_id', 'team_id');
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return asset('storage/' . $this->image);
        }
    }
}
