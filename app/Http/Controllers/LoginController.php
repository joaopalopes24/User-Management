<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            return redirect()->route('home.index');
        } else {
            return view('login');
        }
    }

    public function login(LoginRequest $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($credentials)){
            return redirect()->route('application.users.index');
        } else {
            return redirect()->route('login.index');
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
