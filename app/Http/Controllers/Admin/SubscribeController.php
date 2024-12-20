<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\subscribe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubscribeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subs = subscribe::latest()->get();
        return Inertia::render('Admin/Subscribe/Subscribe', [
            "subs" => $subs,
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
    public function show(Subscribe $subscribe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subscribe $subscribe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subscribe $subscribe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = subscribe::findOrFail($id);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Subscriber deleted successfully",
            'type' => 'success'
        ]);;
    }
}
