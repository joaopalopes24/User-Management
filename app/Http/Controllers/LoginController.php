<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function index()
    {
        if(Session::has('expired')){
            return redirect()->route('login.index')->withErrors(['failed' => 'Sessão Expirada. Favor realizar novamente o login.']);
        }
        return view('login');
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (Auth::attempt($credentials)){
            if(Auth::user()->status == '.fZEW.57&!'){
                Auth::logout();
                return redirect()->route('login.index')->withErrors(['alert' => 'Usuário Bloqueado. Favor entrar em contato com o Administrador.']);
            }
            Session::migrate();
            return redirect()->route('home.index');
        } else {
            return redirect()->route('login.index')->withErrors(['failed' => 'Usuário e/ou Senha Incorretos.']);
        }
    }

    public function recover()
    {
        return view('recover');
    }

    public function recover_do()
    {
        return view('recover');
    }

    public function logout()
    {
        Session::flush();
        Session::regenerate();

        Auth::logout();

        return redirect()->route('login.index');
    }
}
