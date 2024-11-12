<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class UserLoginController extends Controller
{
    public function create()
    {
        return Inertia::render('GuestAuth/Login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        if(App::getLocale() == "id") {
            return redirect()->intended(route("articles.id"));
        }
        if(App::getLocale() == "en") {
            return redirect()->intended(route("articles"));
        }
        if(App::getLocale() == "jp") {
            return redirect()->intended(route("articles.jp"));
        }
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->back();
    }
}
