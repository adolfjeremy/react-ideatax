<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'coverLetter',
        'resume',
        'career_id'
    ];

    public function career()
    {
        return $this->belongsTo(Career::class, "career_id", "id");
    }
}
