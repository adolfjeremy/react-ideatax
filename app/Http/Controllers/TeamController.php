<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Team;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(2);
        $teams = Team::all();
        $sercvices = Service::all();
        return Inertia::render('Team/Team', [
            "teams" => $teams,
            "page" => $page,
            "services" => $sercvices,
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
