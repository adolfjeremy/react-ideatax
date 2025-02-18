<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TaxReportController extends Controller
{
    public function index()
    { 
        return Inertia::render('Services/TaxReport/TaxReport');
    }
}
