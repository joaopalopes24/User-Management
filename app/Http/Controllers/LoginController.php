<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (Auth::attempt($credentials)){
            if(Auth::user()->status == '.fZEW.57&!'){
                Auth::logout();
                return redirect()->route('login.index')->withErrors(['status_block' => 'Usuário Bloqueado. Favor entrar em contato com o Administrador.']);
            }
            return redirect()->route('home.index');
        } else {
            return redirect()->route('login.index')->withErrors(['login_incorrect' => 'Usuário e/ou Senha Incorretos.']);
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
        session()->flush();
        session()->regenerate();

        Auth::logout();

        return redirect()->route('login.index');
    }
}
