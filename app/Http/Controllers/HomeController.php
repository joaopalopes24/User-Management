<?php

namespace App\Http\Controllers;

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

    public function access_denied()
    {
        return view('home.home-access_denied');
    }
}
