<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(6);
        return Inertia::render('Contact/Contact', [
            "page" => $page
        ]);
    }
}
