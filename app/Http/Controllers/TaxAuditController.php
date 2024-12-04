<?php

namespace App\Http\Controllers;

use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;

class TaxAuditController extends Controller
{
    public function detail()
    { 
        $stats = Stat::take(2)->get();
        return Inertia::render('Services/TaxAudit/TaxAudit', [
            "stats" => $stats
        ]);
    }
}
