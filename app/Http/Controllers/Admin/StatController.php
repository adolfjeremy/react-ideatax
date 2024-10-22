<?php

namespace App\Http\Controllers\Admin;

use App\Models\Stat;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StatRequest;

class StatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stats = Stat::all();
        return Inertia::render('Admin/Stat/Stat', [
            "stats" => $stats
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stat $stat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stat $stat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StatRequest $request, $id)
    {
        $data = $request->validated();
        $stat = Stat::findOrFail($id);

        $stat->update($data);
        return redirect()->back()->with([
            'message' => "Statistic updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Stat::findOrFail($id);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Statistic deleted successfully",
            'type' => 'success'
        ]);;
    }
}
