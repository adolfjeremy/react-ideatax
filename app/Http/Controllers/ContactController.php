<?php

namespace App\Http\Controllers;

use App\Models\ConsultationMeetings;
use App\Models\Page;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(6);
        $services= Service::all();
        return Inertia::render('Contact/Contact', [
            "page" => $page,
            "services" => $services,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        ConsultationMeetings::create($data);

        return redirect()->back()->with([
            'message' => "Meeting schedule seted",
            'type' => 'success'
        ]);
    }
}
