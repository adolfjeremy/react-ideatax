<?php

namespace App\Http\Controllers;

use App\Models\Career;
use App\Models\Page;
use App\Models\PhotoGalery;
use Inertia\Inertia;
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
        if(app()->getLocale() == "en") {
            $item = Career::where('slug_eng', $id)->firstOrFail();
        } else if(app()->getLocale() == "id") {
            $item = Career::where('slug', $id)->firstOrFail();
        } else {
            $item = Career::where('slug_jpn', $id)->firstOrFail();
        }
        return Inertia::render('Career/Detail/CareerDetail', [
            "item" => $item
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
