<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\CompanyProfile;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CompanyProfileRequest;
use App\Models\ComproDownloader;

class CompanyProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $compro = CompanyProfile::latest()->take(1)->get();
        $comproDownloader = ComproDownloader::latest()->get();
        return Inertia::render('Admin/Compro/Compro', [
            "compro" => $compro,
            "comproDownloader" => $comproDownloader
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
    public function store(CompanyProfileRequest $request)
    {
        $data = $request->all();

        if($request->file('compro'))
        {
            $data['compro'] = $request->file('compro')->store('compro');
        }        

        CompanyProfile::create($data);

        return redirect()->route('company-profile.index')->with([
            'message' => "Company Profile added successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(CompanyProfile $companyProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CompanyProfile $companyProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompanyProfile $companyProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = CompanyProfile::findOrFail($id);
        Storage::delete($item->compro);
        $item->delete();

        return redirect()->route('company-profile.index')->with([
            'message' => "Company profile deleted successfully",
            'type' => 'success'
        ]);;
    }
}
