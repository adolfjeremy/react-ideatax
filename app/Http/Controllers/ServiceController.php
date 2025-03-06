<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(3);
        $services = Service::get();
        return Inertia::render('Service/Service', [
            "services" => $services,
            "page" => $page
        ]);
    }
    public function Detail($id)
    {
        if(app()->getLocale() == "en") {
            $item = Service::where('slug_eng', $id)->firstOrFail();
        } else if(app()->getLocale() == "id") {
            $item = Service::where('slug', $id)->firstOrFail();
        } else if(app()->getLocale() == "jp") {
            $item = Service::where('slug_jpn', $id)->firstOrFail();
        } else if(app()->getLocale() == "zh-CN") {
            $item = Service::where('slug_ch', $id)->firstOrFail();
        }
        return Inertia::render('Service/Detail/ServiceDetail', [
            'item' => $item,
        ]);
    }
}
