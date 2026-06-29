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
        $locale = app()->getLocale();
        $page = Page::findOrFail(2);
        $nameColumn = match ($locale) {
            'id' => 'name',
            'en' => 'name_eng',
            'jp' => 'name_jpn',
            default => 'name_eng',
        };

        // 1. Ambil data dari DB dan urutkan berdasarkan order departemen
        $departments = Department::orderBy('order', 'asc')->select("$nameColumn as name", "id")
            ->get();

        $positions = Position::orderBy('order', 'asc')->select("$nameColumn as name", "id")->get();    // Me-reset index array agar urut dari 0, 1, 2, dst (penting untuk JSON response)

        $query = Team::with(['department', 'position'])
            ->leftJoin('departments', 'teams.department_id', '=', 'departments.id')
            ->leftJoin('positions', 'teams.position_id', '=', 'positions.id')
            ->select('teams.*')
            ->orderBy('departments.order', 'asc')
            ->orderBy('positions.order', 'asc')
            ->orderBy('teams.order', 'asc');

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
        $locale = app()->getLocale();
        $capabilitiesColumn = match ($locale) {
            'id' => 'capabilities',
            'en' => 'capabilities_eng',
            'jp' => 'capabilities_jpn',
            'ch' => 'capabilities_ch',
            default => 'capabilities_eng',
        };
        $credentialsColumn = match ($locale) {
            'id' => 'credentials',
            'en' => 'credentials_eng',
            'jp' => 'credentials_jpn',
            'ch' => 'credentials_ch',
            default => 'credentials_eng',
        };
        $educationColumn = match ($locale) {
            'id' => 'education',
            'en' => 'education_eng',
            'jp' => 'education_jpn',
            'ch' => 'education_ch',
            default => 'education_eng',
        };
        $biographyColumn = match ($locale) {
            'id' => 'biography',
            'en' => 'biography_eng',
            'jp' => 'biography_jpn',
            'ch' => 'biography_ch',
            default => 'biography_eng',
        };
        $item = Team::where('slug', $id)->with(["awards", "position"])->select("id", "name", "slug", "email", "phone", "photo", "profile_picture", "SEO_title", "SEO_title_eng", "SEO_title_jpn", "SEO_title_ch", "description", "description_eng", "description_jpn", "description_ch", "$capabilitiesColumn as capabilities", "$credentialsColumn as credentials", "$educationColumn as education", "$biographyColumn as biography", "position_id")->firstOrFail();
        return Inertia::render('Team/Detail/TeamDetail', [
            "item" => $item
        ]);
    }
}
