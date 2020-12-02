<?php

namespace App\Http\Controllers;

use App\Models\Permission;

class HomeController extends Controller
{
    public function index()
    {
        return view('dashboard');
    }

    public function access_denied()
    {
        return view('access-denied');
    }
}
