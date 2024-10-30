<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\PhotoGalery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PhotoGaleryRequest;
use Illuminate\Support\Facades\Storage;

class PhotoGaleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeries = PhotoGalery::latest()->get();
        return Inertia::render('Admin/PhotoGalery/PhotoGalery', [
            "galeries" => $galeries
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PhotoGalery/PhotoGaleryCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        if($request->file('image'))
        {
            $data['image'] = $request->file('image')->store('photo-gallery');
        }        

        PhotoGalery::create($data);

        return redirect()->route('photo-galery.index')->with([
            'message' => "Image added successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(PhotoGalery $photoGalery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = PhotoGalery::findOrFail($id);
        return Inertia::render('Admin/PhotoGalery/PhotoGaleryEdit', [
            "item" => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PhotoGaleryRequest $request, $id)
    {
        $data = $request->all();
        $item = PhotoGalery::findOrFail($id);

        if($request->file('image'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['image'] = $request->file('image')->store('photo-gallery');
        }        

        $item->update($data);

        return redirect()->route('photo-galery.index')->with([
            'message' => "photo-galery updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = PhotoGalery::findOrFail($id);
        Storage::delete($item->image);
        $item->delete();

        return redirect()->route('photo-galery.index')->with([
            'message' => "Image deleted successfully",
            'type' => 'success'
        ]);;
    }
}
