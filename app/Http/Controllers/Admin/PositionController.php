<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $positions = Position::all();
        return Inertia::render('Admin/Team/Position/Index', [
            "positions" => $positions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Position::create($data);
        return redirect()->back()->with([
            'message' => "Position Saved successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $item = Position::findOrFail($id);

        $data = $request->validate([
            'name' => 'required',
            'name_eng' => 'required',
            'name_jpn' => 'required',
            'name_ch' => 'required',
            'order' => 'required',
        ]);

        $item->update($data);
        return redirect()->back()->with([
            'message' => "Position updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Position::findOrFail($id);
        $item->delete();

        return redirect()->route('position.index')->with([
            'message' => "Position deleted successfully",
            'type' => 'success'
        ]);;
    }
}
