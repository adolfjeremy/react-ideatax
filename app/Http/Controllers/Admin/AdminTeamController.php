<?php

namespace App\Http\Controllers\Admin;

use App\Models\Team;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\TeamRequest;
use Illuminate\Support\Facades\Storage;

class AdminTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::all();
        return Inertia::render('Admin/Team/Team', [
            "teams" => $teams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Team/TeamCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->name);

        if($request->file('photo'))
        {
            $data['photo'] = $request->file('photo')->store('team');
        }
        if($request->file('profile_picture'))
        {
            $data['profile_picture'] = $request->file('profile_picture')->store('team-pp');
        }         

        Team::create($data);

        return redirect()->route('team.index')->with([
            'message' => "Team created successfully",
            'type' => 'success'
        ]);;
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
        return Inertia::render('Admin/Team/TeamEdit', [
            "item" => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TeamRequest $request, $id)
    {
        $data = $request->all();
        $item = Team::findOrFail($id);

        $data['slug'] = Str::slug($request->name);

        if($request->file('photo'))
        {
            Storage::delete($request->oldPhoto);
            $data['photo'] = $request->file('photo')->store('team');
        }
        if($request->file('profile_picture'))
        {
            Storage::delete($request->oldProfilePicture);
            $data['profile_picture'] = $request->file('profile_picture')->store('team-pp');
        }         

        $item->update($data);

        return redirect()->route('team.index')->with([
            'message' => "Team Updated successfully",
            'type' => 'success'
        ]);;
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
