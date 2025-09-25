<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Models\ServiceCategory;

class ServiceController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(3);
        $catogorizedservices  = ServiceCategory::with("services")->get();
        $services = Service::all();
        return Inertia::render('Service/Service', [
            "catogorizedservices" => $catogorizedservices,
            "page" => $page,
            "services" => $services,
        ]);
    }
    public function Detail($id)
    {
        if (app()->getLocale() == "en") {
            $item = Service::where('slug_eng', $id)->firstOrFail();
        } else if (app()->getLocale() == "id") {
            $item = Service::where('slug', $id)->firstOrFail();
        } else if (app()->getLocale() == "jp") {
            $item = Service::where('slug_jpn', $id)->firstOrFail();
        } else if (app()->getLocale() == "zh-CN") {
            $item = Service::where('slug_ch', $id)->firstOrFail();
        }
        return Inertia::render('Service/Detail/ServiceDetail', [
            'item' => $item,
        ]);
    }
}
