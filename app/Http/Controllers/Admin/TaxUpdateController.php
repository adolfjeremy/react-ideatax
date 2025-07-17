<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\TaxUpdate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\TaxUpdateCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\TaxUpdateRequest;
use Illuminate\Support\Facades\Storage;

class TaxUpdateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $updates = TaxUpdate::latest()->select('id', 'SEO_title_eng', 'title_eng')->get();
        return Inertia::render('Admin/Update/Update', [
            "updates" => $updates
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = TaxUpdateCategory::all();
        return Inertia::render('Admin/Update/UpdateCreate', [
            "categories" => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaxUpdateRequest $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language: "ja-JP");


        if ($request->file('photo')) {
            $data['photo'] = $request->file('photo')->store('update');
        }
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('update');
        }
        if ($request->file('pdf')) {
            $data['pdf'] = $request->file('pdf')->store('update/pdf');
        }

        TaxUpdate::create($data);

        return redirect()->route('updates.index')->with([
            'message' => "Tax Update created successfully",
            'type' => 'success'
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(TaxUpdate $taxUpdate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = TaxUpdate::findOrFail($id);
        $categories = TaxUpdateCategory::all();
        return Inertia::render('Admin/Update/UpdateEdit', [
            "item" => $item,
            "categories" => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $item = TaxUpdate::findOrFail($id);

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language: "ja-JP");

        if ($request->file('photo')) {
            Storage::delete($request->oldPhoto);
            $data['photo'] = $request->file('photo')->store('update');
        }
        if ($request->file('thumbnail')) {
            Storage::delete($request->oldThumbnail);
            $data['thumbnail'] = $request->file('thumbnail')->store('update');
        }
        if ($request->file('pdf')) {
            Storage::delete($request->oldPdf);
            $data['pdf'] = $request->file('pdf')->store('update/pdf');
        }

        $item->update($data);

        return redirect()->route('updates.index')->with([
            'message' => "Tax Update Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = TaxUpdate::findOrFail($id);
        Storage::delete($item->photo);
        Storage::delete($item->thumbnail);
        $item->delete();

        return redirect()->route('updates.index')->with([
            'message' => "Tax Update deleted successfully",
            'type' => 'success'
        ]);
    }
}
