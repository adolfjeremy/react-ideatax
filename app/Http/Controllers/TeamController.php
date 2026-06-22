<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Team;
use Inertia\Inertia;
use App\Models\Service;
use App\Models\Department;
use App\Models\Position;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index(Request $request)
    {
        // 1. Ambil data statis dengan efisien
        $page = Page::findOrFail(2);

        // 1. Ambil data dari DB dan urutkan berdasarkan order departemen
        $departments = Department::orderBy('order', 'asc')
            ->get();

        $positions = Position::orderBy('order', 'asc')->get();    // Me-reset index array agar urut dari 0, 1, 2, dst (penting untuk JSON response)

        $query = Team::with(['department', 'position']);

        if ($request->filled('department_id') && $request->department_id !== 'all') {
            $query->where('department_id', $request->department_id);
        }

        if ($request->filled('position_id') && $request->position_id !== 'all') {
            $query->where('position_id', $request->position_id);
        }

        $teams = $query->paginate(25)->withQueryString();
        return Inertia::render('Team/Team', [
            "page"        => $page,
            "departments" => $departments,
            "teams"       => $teams,
            "positions"    => $positions,
            'filters' => [
                'department_id' => $request->department_id ?? 'all',
                'position_id' => $request->position_id ?? 'all',
            ],
        ]);
    }

    public function detail($id)
    {
        $item = Team::where('slug', $id)->with(["awards", "position"])->firstOrFail();
        return Inertia::render('Team/Detail/TeamDetail', [
            "item" => $item
        ]);
    }
}
