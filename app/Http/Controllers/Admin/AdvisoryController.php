<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Advisory;
use App\Models\Team;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdvisoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $advisories = Advisory::with(['team'])->get();
        return Inertia::render('Admin/Advisory/Advisory', [
            "advisories" => $advisories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $teams = Team::with(['department', 'position'])->get();
        return Inertia::render('Admin/Advisory/Create', [
            "teams" => $teams,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['slug_eng'] = Str::slug($request->title_eng);
        if($request->title_jpn) {
            $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");
        }
        if($request->title) {
            $data['slug'] = Str::slug($request->title);
        }      

        Advisory::create($data);

        return redirect()->route('advisories.index')->with([
            'message' => "Advisory created successfully",
            'type' => 'success'
        ]);
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
        $item = Advisory::with("team")->findOrFail($id);
        $teams = Team::with(['department', 'position'])->get();
        return Inertia::render('Admin/Advisory/Edit', [
            "item" => $item,
            "teams" => $teams,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
       $data = $request->all();
        $item = Advisory::findOrFail($id);

        if($request->title_eng) {
            $data['slug_eng'] = Str::slug($request->title_eng);
        }
        if($request->title_jpn) {
            $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");
        }
        if($request->title) {
            $data['slug'] = Str::slug($request->title);
        }           

        $item->update($data);

        return redirect()->route('advisories.index')->with([
            'message' => "Advisory Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Advisory::findOrFail($id);
        $item->delete();

        return redirect()->route('advisories.index')->with([
            'message' => "Advisory deleted successfully",
            'type' => 'success'
        ]);;
    }
}
