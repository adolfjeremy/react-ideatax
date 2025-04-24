<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Service;
use App\Models\TaxEvent;
use App\Models\subscribe;
use App\Models\HeroSlider;
use Illuminate\Http\Request;
use App\Models\CompanyProfile;
use App\Models\ComproDownloader;
use App\Models\ServiceCategory;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Symfony\Component\HttpFoundation\IpUtils;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(1);
        $heroes = HeroSlider::all();
        $stats = Stat::all();
        $catogorizedservices  = ServiceCategory::with("services")->get();
        $unCatogorizedservices  = Service::where("service_category_id", null)->get();
        $articles = Article::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail', 'created_at')->get();
        $events = TaxEvent::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')->get();
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "catogorizedservices" => $catogorizedservices,
            "unCatogorizedservices" => $unCatogorizedservices,
            "articles" => $articles,
            "events" => $events,
            "page" => $page
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $compro = CompanyProfile::orderBy('updated_at', 'desc')->first();
        $path = asset("storage/" . $compro->compro);
        ComproDownloader::create($data);
        return redirect()->back()->with([
            'message' => $path,
            'type' => 'success'
        ]);
    }

    public function subscribe(Request $request)
    {
        $data = $request->all();
        subscribe::create($data);
        return redirect()->back()->with([
            'message' => "Thanks for the subscription",
            'type' => 'success'
        ]);
    }
}
