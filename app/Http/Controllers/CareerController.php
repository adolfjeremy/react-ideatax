<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Models\Career;
use App\Models\Applicant;
use App\Models\PhotoGalery;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(7);
        $careers = Career::latest()->get();
        return Inertia::render('Career/Career', [
            "page" => $page,
            "careers" => $careers,
        ]);
    }
    public function detail($id)
    {
        if (app()->getLocale() == "en") {
            $item = Career::where('slug_eng', $id)->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = Career::where('slug', $id)->firstOrFail();
        } else {
            $item = Career::where('slug_jpn', $id)->firstOrFail();
        }
        return Inertia::render('Career/Detail/CareerDetail', [
            "item" => $item
        ]);
    }

    public function apply(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'coverLetter' => 'required|string',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'career_id' => 'required|exists:careers,id'
        ]);

        // Store the resume file
        $data['resume'] = $request->file('resume')->store('resumes');

        // Create the applicant
        Applicant::create($data);

        return redirect()->back()->with([
            'message' => "Application submitted successfully",
            'type' => 'success'
        ]);
    }

    public function life()
    {
        $page = Page::findOrFail(8);
        $galeries = PhotoGalery::latest()->get();
        return Inertia::render('Career/Life/LifeAtIdeatax', [
            "page" => $page,
            "galeries" => $galeries
        ]);
    }
}
