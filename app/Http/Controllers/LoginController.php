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
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        print_r($request->messages()['login_incorrect']);

        if (Auth::attempt($credentials)){
            if(TRUE){
                return redirect()->route('home.index');
            } else {
                return redirect()->route('login.index')->withErrors('Usuário Bloqueado. Favor entrar em contato com o Administrador.');
            }
        } else {
            return redirect()->route('login.index')->withErrors('Usuário e/ou Senha Incorretos.');
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
