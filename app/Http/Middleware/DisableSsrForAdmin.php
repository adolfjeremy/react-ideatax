<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DisableSsrForAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Jika URL diawali dengan /admin, nonaktifkan SSR
        if ($request->is('admin/*') || $request->is('admin')) {
            config()->set('inertia.ssr', false);
        }

        return $next($request);
    }
}
