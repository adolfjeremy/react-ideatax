<?php

namespace App\Http\Controllers\Admin;

use App\Models\Team;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\TeamRequest;
use App\Models\Position;
use App\Models\Department;
use App\Models\Award;

class AdminTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::with(['position', 'department'])->get();
        return Inertia::render('Admin/Team/Team', [
            "teams" => $teams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $positions = Position::all();
        $departments = Department::all();
        $awards = Award::orderBy('year', 'desc')->get();
        return Inertia::render('Admin/Team/TeamCreate', [
            "positions" => $positions,
            "departments" => $departments,
            "awards" => $awards
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Ambil semua data input kecuali 'award_ids' agar tidak error saat create ke tabel teams
        $data = $request->except('award_ids');
        $data['slug'] = Str::slug($request->name);

        DB::beginTransaction();
        try {
            if ($request->file('photo')) {
                $data['photo'] = $request->file('photo')->store('team');
            }
            if ($request->file('profile_picture')) {
                $data['profile_picture'] = $request->file('profile_picture')->store('team-pp');
            }

            // 1. Simpan data Tim terlebih dahulu
            $team = Team::create($data);

            // 2. Hubungkan award yang dipilih ke tabel pivot
            if ($request->has('award_ids')) {
                $team->awards()->attach($request->award_ids);
            }

            DB::commit();

            return redirect()->route('team.index')->with([
                'message' => "Team created successfully",
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            // Hapus kembali file yang telanjur terupload jika query DB gagal
            if (isset($data['photo'])) Storage::delete($data['photo']);
            if (isset($data['profile_picture'])) Storage::delete($data['profile_picture']);

            return redirect()->back()->with([
                'message' => "Failed to create team: " . $e->getMessage(),
                'type' => 'error'
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Team::findOrFail($id);
        $positions = Position::all();
        $departments = Department::all();
        $awards = Award::orderBy('year', 'desc')->get();
        return Inertia::render('Admin/Team/TeamEdit', [
            "item" => $item,
            "positions" => $positions,
            "departments" => $departments,
            "awards" => $awards
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TeamRequest $request, $id)
    {
        // Ambil semua data input kecuali 'award_ids' agar tidak mengganggu proses update tabel teams
        $data = $request->except('award_ids');
        $item = Team::findOrFail($id);

        $data['slug'] = Str::slug($request->name);

        DB::beginTransaction();
        try {
            if ($request->file('photo')) {
                Storage::delete($request->oldPhoto);
                $data['photo'] = $request->file('photo')->store('team');
            }
            if ($request->file('profile_picture')) {
                Storage::delete($request->oldProfilePicture);
                $data['profile_picture'] = $request->file('profile_picture')->store('team-pp');
            }

            // 1. Update data dasar tim
            $item->update($data);

            // 2. Sinkronisasi data award di tabel pivot (tambah yang baru, hapus yang tidak dicentang)
            // Jika award_ids tidak dikirim atau kosong, akan otomatis mengosongkan relasi award tim ini
            $item->awards()->sync($request->award_ids ?? []);

            DB::commit();

            return redirect()->route('team.index')->with([
                'message' => "Team Updated successfully",
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            // Hapus file baru yang gagal disimpan jika proses update bermasalah
            if ($request->file('photo') && isset($data['photo'])) Storage::delete($data['photo']);
            if ($request->file('profile_picture') && isset($data['profile_picture'])) Storage::delete($data['profile_picture']);

            return redirect()->back()->with([
                'message' => "Failed to update team: " . $e->getMessage(),
                'type' => 'error'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Team::findOrFail($id);
        Storage::delete($item->photo);
        Storage::delete($item->profile_picture);
        $item->delete();

        return redirect()->route('team.index')->with([
            'message' => "Team deleted successfully",
            'type' => 'success'
        ]);;
    }
}
