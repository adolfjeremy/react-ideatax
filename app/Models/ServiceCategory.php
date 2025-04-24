<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    protected $fillable = [
        'title',
        'service_id',
    ];

    public function services()
    {
        return $this->hasMany(Service::class);
    }
}
