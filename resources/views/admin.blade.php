<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:site_name" content="Ideatax">
    <meta name="robots" content="index">
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon">
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
</body>

</html>
