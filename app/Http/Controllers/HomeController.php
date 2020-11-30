<?php

namespace App\Http\Controllers;

use App\Helpers;

class HomeController extends Controller
{
    public function index()
    {
        $permissao = Helpers::authetication_helper();

        if ($permissao) {

            return view('dashboard');

        } else {

            return view('access-denied');

        }
    }
}
