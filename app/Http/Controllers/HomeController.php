<?php

namespace App\Http\Controllers;

use App\Models\HeroSlider;
use App\Models\Stat;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $heroes = HeroSlider::all();
        $stats = Stat::all();
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats
        ]);
    }
}
