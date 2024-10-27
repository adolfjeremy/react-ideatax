<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::all();
        return Inertia::render('Team/Team', [
            "teams" => $teams
        ]);
    }

    public function detail($id)
    {
        $item = Team::where('slug', $id)->firstOrFail();
        return Inertia::render('Team/Detail/TeamDetail', [
            "item" => $item
        ]);
    }
}
