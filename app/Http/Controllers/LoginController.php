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

        if(FALSE){
            return redirect()->route('login.index')->withErrors(['status_block' => 'Usuário Bloqueado. Favor entrar em contato com o Administrador.']);
        }

        if (Auth::attempt($credentials)){
            return redirect()->route('home.index');
        } else {
            return redirect()->route('login.index')->withErrors(['login_incorrect' => 'Usuário e/ou Senha Incorretos.']);
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
