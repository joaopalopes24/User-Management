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

        User::change(Auth::user()->id,$dados['key']);

        return redirect()->route('home.change_password')->withErrors(['success' => trans('passwords.reset')]);
    }

    public function access_denied()
    {
        return view('home.home-access_denied');
    }
}
