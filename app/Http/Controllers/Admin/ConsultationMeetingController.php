<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ConsultationMeetings;

class ConsultationMeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $meetings = ConsultationMeetings::with("service")->latest()->get();
        return Inertia::render('Admin/ConsultationMeeting/ConsultationMeeting', [
            "meetings" => $meetings,
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
    public function show(ConsultationMeetings $consultationMeetings)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ConsultationMeetings $consultationMeetings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ConsultationMeetings $consultationMeetings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = ConsultationMeetings::findOrFail($id);
        $item->delete();

        return redirect()->route('consultation-meeting.index')->with([
            'message' => "Meeting deleted successfully",
            'type' => 'success'
        ]);;
    }
}
