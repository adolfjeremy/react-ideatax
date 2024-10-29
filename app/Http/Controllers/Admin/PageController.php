<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = Page::all();
        return Inertia::render('Admin/Page/Page', [
            "pages" => $pages
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
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Page::findOrFail($id);
        return Inertia::render('Admin/Page/PageEdit', [
            "item" => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $item = Page::findOrFail($id);
        $item->update($data);

        return redirect()->route('page.index')->with([
            'message' => "Page updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Page::findOrFail($id);
        $item->delete();

        return redirect()->route('page.index')->with([
            'message' => "Page deleted successfully",
            'type' => 'success'
        ]);;
    }
}
