<?php

namespace App\Http\Controllers;

use App\Models\Stat;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TaxPlanningController extends Controller
{
    public function index()
    {
        $stats = Stat::take(2)->get();
        return Inertia::render('Services/TaxPlanning/TaxPlanning', [
            "stats" => $stats
        ]);
    }
}
