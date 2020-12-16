<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        return view('home.home-index');
    }

    public function detailed()
    {
        return view('home.home-detailed');
    }

    public function change_password()
    {
        return view('home.home-change_password');
    }

    public function change_password_do(HomeRequest $request)
    {
        $dados = $request->validated();

        $credentials = [
            'email' => Auth::user()->email,
            'password' => $dados['password'],
        ];

        if(Auth::attempt($credentials)){
            if($dados['new_password'] == $dados['new_password_2']){
                User::change(Auth::user()->id,$dados['new_password']);
                return redirect()->route('home.change_password')->withErrors(['success' => 'Senha alterada com Sucesso.']);
            } else {
                return redirect()->route('home.change_password')->withErrors(['failed' => 'Senha digitadas Divergentes.']);
            }
        } else {
            return redirect()->route('home.change_password')->withErrors(['failed' => 'Senha Atual está incorreta.']);
        }
    }

    public function access_denied()
    {
        return view('home.home-access_denied');
    }
}
