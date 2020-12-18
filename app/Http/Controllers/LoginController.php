<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
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

    public function recover_do(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );
    
        return $status === Password::RESET_LINK_SENT
            ? redirect()->route('login.index')->withErrors(['success' => 'E-mail para redefinição de senha enviado com sucesso.'])
            : redirect()->route('login.recover')->withErrors(['failed' => 'E-mail não localizado.']);
    }

    public function reset($token)
    {
        return view('reset',['token' => $token]);
    }

    public function reset_do(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|min:8',
        ]);

        if($request->password != $request->password_confirmation){
            return back()->withErrors(['failed' => 'Senha digitadas Divergentes.']);
        }
    
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
    
                $user->setRememberToken(Str::random(60));
    
                event(new PasswordReset($user));
            }
        );
    
        return $status == Password::PASSWORD_RESET
            ? redirect()->route('login.index')->withErrors(['success' =>'Senha alterada com sucesso.'])
            : redirect()->route('login.index')->withErrors(['failed' =>'Link já utilizado para redefinição de senha.']);
    }

    public function logout()
    {
        Session::flush();
        Session::regenerate();

        Auth::logout();

        return redirect()->route('login.index');
    }
}
