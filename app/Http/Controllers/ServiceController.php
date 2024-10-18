<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Service/Service');
    }
    public function Detail()
    {
        return Inertia::render('Service/Detail/ServiceDetail');
    }
}
