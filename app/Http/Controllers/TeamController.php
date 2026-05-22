<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Team;
use Inertia\Inertia;
use App\Models\Service;
use App\Models\Department;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        // 1. Ambil data statis dengan efisien
        $page = Page::findOrFail(2);
        $services = Service::all(); // Perbaikan typo variabel 'sercvices' -> 'services'
        $relations = ['teams.position', 'teams.awards'];

        // 1. Ambil data dari DB dan urutkan berdasarkan order departemen
        $rawDepartments = Department::with($relations)
            ->orderBy('order', 'asc')
            ->get();

        // 2. Transformasi data: Department > Team > Position
        $departments = $rawDepartments->map(function ($department) {
            return [
                'id'       => $department->id,
                'name'     => $department->name,
                'name_ch'  => $department->name_ch,
                'name_eng' => $department->name_eng,
                'name_jpn' => $department->name_jpn,
                'order'    => $department->order,
                'teams'    => $department->teams->map(function ($team) {
                    return [
                        'id'       => $team->id,
                        'name'     => $team->name,
                        'slug'     => $team->slug,
                        'phone'    => $team->phone,
                        'email'    => $team->email,
                        'photo'    => $team->photo,
                        'awards'   => $team->awards,
                        'position' => $team->position ? [
                            'id'       => $team->position->id,
                            'name'     => $team->position->name,
                            'name_ch'  => $team->position->name_ch,
                            'name_eng' => $team->position->name_eng,
                            'name_jpn' => $team->position->name_jpn,
                            'order'    => $team->position->order ?? 0,
                        ] : null
                    ];
                })->values()
            ];
        })
            ->sortBy('order') // Proteksi ganda: memastikan collection di-sort kembali berdasarkan order departemen
            ->values();      // Me-reset index array agar urut dari 0, 1, 2, dst (penting untuk JSON response)

        // 3. Flat list teams untuk kebutuhan lain (misal search bar)
        $teams = $rawDepartments->pluck('teams')->collapse()->merge($partners?->teams ?? []);
        return Inertia::render('Team/Team', [
            "page"        => $page,
            "services"    => $services,
            "departments" => $departments,
            "teams"       => $teams,
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
