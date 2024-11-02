<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;

class TaxAuditController extends Controller
{
    public function detail()
    {
        return Inertia::render('Services/TaxAudit/TaxAudit');
    }
}
