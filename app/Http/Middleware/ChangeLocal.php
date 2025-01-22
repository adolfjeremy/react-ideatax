<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\App;

class ChangeLocal
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isIndonesian = $request->segment(1);
        if (in_array($isIndonesian, ['en', 'id', 'jp', 'zh-CN'])) {
            App::setLocale($isIndonesian);  // Set locale sesuai segmen URL
        } else {
            App::setLocale('en');  // Default locale ke 'en' jika tidak ditemukan
        }
        return $next($request);
    }
}
