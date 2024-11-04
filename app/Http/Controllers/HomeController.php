<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Stat;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\CompanyProfile;
use App\Models\Service;
use App\Models\TaxEvent;
use App\Models\HeroSlider;
use Illuminate\Http\Request;
use App\Models\ComproDownloader;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\IpUtils;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::findOrFail(1);
        $heroes = HeroSlider::all();
        $stats = Stat::all();
        $services = Service::select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn')->get();
        $articles = Article::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'thumbnail', 'created_at')->get();
        $events = TaxEvent::latest()->take(4)->select('id', 'title', 'title_eng', 'title_jpn', 'slug', 'slug_eng', 'slug_jpn', 'photo', 'created_at')->get();
        return Inertia::render('Home/Home', [
            "heroes" => $heroes,
            "stats" => $stats,
            "services" => $services,
            "articles" => $articles,
            "events" => $events,
            "page" => $page
        ]);
    }

    

    // public function store(Request $request)
    // {
    //     $data = $request->all();

    //     $recaptcha_response = $request->input('captchaVerified');

    //     if (is_null($recaptcha_response)) {
    //         return redirect()->back()->with('status', 'Please Complete the Recaptcha to proceed');
    //     }

    //     $url = "https://www.google.com/recaptcha/api/siteverify";

    //     $body = [
    //         'secret' => env('RECAPTCHA_SECRET_KEY'),
    //         'response' => $recaptcha_response,
    //     ];

    //     $response = Http::asForm()->post($url, $body);
    //     $result = json_decode($response);
    //     dd($response);

    //     if ($response->successful() && $result->success == true) {
    //         $compro = CompanyProfile::orderBy('updated_at', 'desc')->first();
    //         $path = asset("storage/" . $compro->compro);

    //         ComproDownloader::create($data);
            
    //         Session::flush();

    //     return  redirect()->to($path);
    //     } else {
    //         return redirect()->back()->with('status', 'Please Complete the Recaptcha Again to proceed');
    //     }
        
    // }
}
