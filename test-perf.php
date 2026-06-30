<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::create('/', 'GET');
$kernel->handle($request); // boot and warm cache

$start = microtime(true);
$response = $kernel->handle($request);
$end = microtime(true);

echo "Home Time (Cached + Ziggy Cached): " . (($end - $start) * 1000) . " ms\n";
