<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Award;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AwardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $awards = Award::all();
        return Inertia::render('Admin/Team/Award/index', [
            "awards" => $awards
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

        if ($request->file('image')) {
            $data['image'] = $request->file('image')->store('award');
        }

        Award::create($data);

        return redirect()->route('award.index')->with([
            'message' => "Award created successfully",
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
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $item = Award::findOrFail($id);

        if ($request->file('image')) {
            $data['image'] = $request->file('image')->store('award');
        }

        $item->update($data);

        return redirect()->route('award.index')->with([
            'message' => "Award updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Award::findOrFail($id);
        Storage::delete($item->image);
        $item->delete();

        return redirect()->route('award.index')->with([
            'message' => "Award deleted successfully",
            'type' => 'success'
        ]);
    }
}
