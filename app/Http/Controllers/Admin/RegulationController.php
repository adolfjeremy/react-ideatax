<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Regulation;
use App\Models\Team;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RegulationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $regulations = Regulation::all();
        return Inertia::render('Admin/Regulation/Regulation', [
            "regulations" => $regulations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Regulation/Create');
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

        if ($request->file('document')) {
            $data['document'] = $request->file('document')->store('regulations/pdf');
        }
        

        Regulation::create($data);

        return redirect()->route('regulations.index')->with([
            'message' => "Regulation created successfully",
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
        $item = Regulation::findOrFail($id);
        return Inertia::render('Admin/Regulation/Edit', [
            "item" => $item,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
       $data = $request->all();
        $item = Regulation::findOrFail($id);

        if($request->title_eng) {
            $data['slug_eng'] = Str::slug($request->title_eng);
        }
        if($request->title_jpn) {
            $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");
        }
        if($request->title) {
            $data['slug'] = Str::slug($request->title);
        }
        if ($request->file('document')) {
            if($request->oldDocument) {
                Storage::delete($request->oldDocument);
            }
            $data['document'] = $request->file('document')->store('regulations/pdf');
        }

        $item->update($data);

        return redirect()->route('regulations.index')->with([
            'message' => "Regulation Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Regulation::findOrFail($id);
        $item->delete();

        return redirect()->route('regulations.index')->with([
            'message' => "Regulation deleted successfully",
            'type' => 'success'
        ]);;
    }
}
