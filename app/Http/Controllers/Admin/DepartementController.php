<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::all();
        return Inertia::render('Admin/Team/Department/Index', [
            "departments" => $departments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = $request->all();
        Department::create($data);
        return redirect()->back()->with([
            'message' => "Department Saved successfully",
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
        $item = Department::findOrFail($id);

        $data = $request->validate([
            'name' => 'required',
            'name_eng' => 'required',
            'name_jpn' => 'required',
            'name_ch' => 'required',
            'order' => 'required',
        ]);

        $item->update($data);
        return redirect()->back()->with([
            'message' => "Department updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Department::findOrFail($id);
        $item->delete();

        return redirect()->route('department.index')->with([
            'message' => "Department deleted successfully",
            'type' => 'success'
        ]);;
    }
}
