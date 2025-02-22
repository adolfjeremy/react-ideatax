<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Stat;

class TaxReportController extends Controller
{
    public function index()
    {
        $stats = Stat::take(2)->get(); 
        return Inertia::render('Services/TaxReport/TaxReport', [
            "stats" => $stats
        ]);
    }
}
