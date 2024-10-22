<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\HeroSlider;
use Illuminate\Http\Request;
use App\Http\Requests\HeroRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class HeroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $heroes = HeroSlider::all();
        return Inertia::render('Admin/Hero/Hero', [
            "heroes" => $heroes
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
    public function store(HeroRequest $request)
    {
        $data = $request->validated();

        if($request->file('hero'))
        {
            $data['hero'] = $request->file('hero')->store('hero');
        }
        HeroSlider::create($data);
        return redirect()->back()->with([
            'message' => "Hero Saved successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(HeroSlider $heroSlider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HeroSlider $heroSlider)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HeroRequest $request, $id)
    {
        $data = $request->validated();
        $heroes = HeroSlider::findOrFail($id);

        if($request->file('hero'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['hero'] = $request->file('hero')->store('hero');
        }
        $heroes->update($data);
        return redirect()->back()->with([
            'message' => "Hero updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = HeroSlider::findOrFail($id);
        Storage::delete($item->hero);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Hero deleted successfully",
            'type' => 'success'
        ]);;
    }
}
