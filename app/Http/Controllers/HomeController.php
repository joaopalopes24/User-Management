<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use function App\authetication_helper;

class HomeController extends Controller
{
    public function index(){

        if(Auth::check()){
        
            return view('dashboard');
        }
        
        return redirect()->route('login.index');

        /* $permissao = authetication_helper();

        if($permissao){

            return view('dashboard');
        }

        else{

            return view('access-denied');
        } */

    }
}
