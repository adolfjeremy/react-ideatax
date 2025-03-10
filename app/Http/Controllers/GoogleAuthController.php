<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\App;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
            $finduser = User::where('google_id', $user->id)->first();

            if ($finduser) {
                Auth::login($finduser);
                if(App::getLocale() == "id") {
                    return redirect()->intended(route("articles.id"));
                }
                if(App::getLocale() == "en") {
                    return redirect()->intended(route("articles"));
                }
                if(App::getLocale() == "jp") {
                    return redirect()->intended(route("articles.jp"));
                }
            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id'=> $user->id,
                    'password' => encrypt('123456dummy')
                ]);

                Auth::login($newUser);
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
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
