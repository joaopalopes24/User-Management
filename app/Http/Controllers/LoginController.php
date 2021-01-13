<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RecoverRequest;
use App\Http\Requests\ResetRequest;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

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
            if(Auth::user()->status != '$2y$10rH@g'){
                Auth::logout();
                return redirect()->route('login.index')->withErrors(['alert' => 'Poxa... Seu usuário está bloqueado. Favor entrar em contato com o Administrador.']);
            }
            Session::migrate();
            return redirect()->route('home.index');
        } else {
            return redirect()->route('login.index')->withErrors(['failed' => 'Poxa... Usuário e/ou Senha Incorretos.']);
        }
    }

    public function recover()
    {
        return view('recover');
    }

    public function recover_do(RecoverRequest $request)
    {
        $request = $request->validated();

        $status = Password::sendResetLink($request);
    
        return $status === Password::RESET_LINK_SENT
            ? redirect()->route('login.index')->withErrors(['success' => 'O link para redefinição de senha foi enviado para o seu e-mail, ok?'])
            : redirect()->route('login.recover')->withErrors(['failed' => 'Poxa... Ocorreu um erro ao encaminhar sua redefinição de senha. Tente novamente em segundos!']);
    }

    public function reset($token)
    {
        return view('reset',['token' => $token]);
    }

    public function reset_do(ResetRequest $request)
    {
        $request = $request->validated();

        dd($request);
    
        $status = Password::reset(
            $request,
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
    
                $user->setRememberToken(Str::random(60));
    
                event(new PasswordReset($user));
            }
        );
    
        return $status == Password::PASSWORD_RESET
            ? redirect()->route('login.index')->withErrors(['success' =>'Parabéns, a sua senha foi redefinida!'])
            : redirect()->route('login.index')->withErrors(['failed' =>'Ops... Houve um erro ao tentar alterar a senha do Usuário!']);
    }

    public function logout()
    {
        Session::flush();
        Session::regenerate();

        Auth::logout();

        return redirect()->route('login.index');
    }
}
