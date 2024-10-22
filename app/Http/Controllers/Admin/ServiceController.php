<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();
        return Inertia::render('Admin/Service/Service', [
            "services" => $services
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Service/ServiceCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn);

        if($request->file('image'))
        {
            $data['image'] = $request->file('image')->store('service');
        }        

        Service::create($data);

        return redirect()->route('services.index')->with([
            'message' => "Service created successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
