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
        $unCatogorizedservices  = Service::where("service_category_id", null)->get();
        $services = Service::all();
        return Inertia::render('Service/Service', [
            "catogorizedservices" => $catogorizedservices,
            "unCatogorizedservices" => $unCatogorizedservices,
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
