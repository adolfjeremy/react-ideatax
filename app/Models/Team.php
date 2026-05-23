<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'position_id',
        'department_id',
        'order',
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

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function awards()
    {
        // Parameter: ModelTarget, NamaTabelPivot, FK_ModelIni, FK_ModelTarget
        return $this->belongsToMany(Award::class, 'award_team', 'team_id', 'award_team_id')
            ->orderBy('year', 'desc');
    }
}
