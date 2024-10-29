<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Career;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminCareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $careers = Career::latest()->get();
        return Inertia::render('Admin/Career/Career', [
            "careers" => $careers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Career/CareerCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");      

        Career::create($data);

        return redirect()->route('career.index')->with([
            'message' => "Career created successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Career::findOrFail($id);
        return Inertia::render('Admin/Career/CareerEdit', [
            "item" => $item,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $item = Career::findOrFail($id);

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");        

        $item->update($data);

        return redirect()->route('career.index')->with([
            'message' => "Career Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Career::findOrFail($id);
        $item->delete();

        return redirect()->route('career.index')->with([
            'message' => "Career deleted successfully",
            'type' => 'success'
        ]);;
    }
}
