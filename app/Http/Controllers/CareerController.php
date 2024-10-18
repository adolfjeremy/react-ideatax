<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    public function index()
    {
        return Inertia::render('Career/Career');
    }
    public function detail()
    {
        return Inertia::render('Career/Detail/CareerDetail');
    }
    public function life()
    {
        return Inertia::render('Career/Life/LifeAtIdeatax');
    }
}
