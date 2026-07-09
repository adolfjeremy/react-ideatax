<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SsrCacheMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Hanya proses cache untuk request GET dan bagi visitor (guest)
        if (!$request->isMethod('GET') || auth()->check()) {
            return $next($request);
        }

        // Mengecualikan endpoint backend, auth, dan api dari proses cache SSR
        if ($request->is('admin*') || $request->is('login') || $request->is('api*') || $request->is('livewire*')) {
            return $next($request);
        }

        $version = Cache::get('ssr_cache_version', 1);
        $isInertia = $request->header('X-Inertia', '0');
        $locale = app()->getLocale();
        $url = $request->fullUrl();

        // Kunci cache berbasis versi agar mudah dihapus massal saat publish artikel
        $key = 'ssr_cache_v' . $version . '_' . md5($url . '_' . $isInertia . '_' . $locale);

        $cachedResponse = Cache::get($key);

        if ($cachedResponse && isset($cachedResponse['content'], $cachedResponse['status'], $cachedResponse['headers'])) {
            return response($cachedResponse['content'], $cachedResponse['status'], $cachedResponse['headers']);
        }

        $response = $next($request);

        // Hanya cache halaman yang sukses di-render (200 OK)
        if ($response->isSuccessful() && method_exists($response, 'getContent')) {
            // Simpan cache selama 1 jam (3600 detik) sesuai kesepakatan
            Cache::put($key, [
                'content' => $response->getContent(),
                'status'  => $response->getStatusCode(),
                'headers' => $response->headers->all(),
            ], 3600);
        }

        return $response;
    }
}
