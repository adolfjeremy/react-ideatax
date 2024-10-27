<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\TaxEvent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\TaxEventRequest;
use Illuminate\Support\Facades\Storage;

class TaxEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = TaxEvent::all();
        return Inertia::render('Admin/TaxEvent/TaxEvent', [
            "events" => $events
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/TaxEvent/TaxEventCreate');
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

        if($request->file('photo'))
        {
            $data['photo'] = $request->file('photo')->store('event');
        }        

        TaxEvent::create($data);

        return redirect()->route('tax-event.index')->with([
            'message' => "Tax Event created successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(TaxEvent $taxEvent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = TaxEvent::findOrFail($id);
        return Inertia::render('Admin/TaxEvent/TaxEventEdit', [
            "item" => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaxEventRequest $request, $id)
    {
        $data = $request->all();
        $item = TaxEvent::findOrFail($id);

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");

        if($request->file('photo'))
        {
            Storage::delete($request->oldPhoto);
            $data['photo'] = $request->file('photo')->store('event');
        }        

        $item->update($data);

        return redirect()->route('tax-event.index')->with([
            'message' => "Tax Event Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TaxEvent $taxEvent)
    {
        //
    }
}
