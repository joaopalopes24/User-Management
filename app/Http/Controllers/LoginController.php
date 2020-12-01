<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Helpers;

class LoginController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        $messages = $request->messages();

        dd($messages);

        if (Auth::attempt($credentials)){
            if(TRUE){
                return redirect()->route('home.index');
            } else {
                return redirect()->route('login.index')->withErrors($messages);
            }
        } else {
            return redirect()->route('login.index')->withErrors($messages);
        }
    }

    public function recover()
    {
        return view('recover');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('login.index');
    }
}
