<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ContentSecurityPolicy
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $csp = "
            default-src 'self';
            script-src 'self' 'unsafe-inline' https://.googletagmanager.com https://.google-analytics.com;
            connect-src 'self' https://.google-analytics.com https://.analytics.google.com https://*.googletagmanager.com;
            img-src 'self' data: https://.google-analytics.com https://.googletagmanager.com;
        ";

        $response->headers->set(
            'Content-Security-Policy',
            preg_replace('/\s+/', ' ', trim($csp))
        );

        return $response;
    }
}
