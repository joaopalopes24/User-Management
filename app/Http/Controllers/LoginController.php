<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index(){

        return view('login');
    }

    public function login(LoginRequest $request){

        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        Auth::attempt($credentials);

        return redirect()->route('home.index');
    }

    public function recover(){

        return view('recover');
    }

    public function logout(){

        Auth::logout();

        return redirect()->route('home.index');
    }
}
