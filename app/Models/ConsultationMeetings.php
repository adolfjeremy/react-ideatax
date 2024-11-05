<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ConsultationMeetings extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'service_id',
        'schedule',
        'description',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, "service_id", "id");
    }
}
