<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{
    public function index()
    {
        $permissions = Permission::permissions();

        print_r($permissions);
        
        return view('dashboard');
    }

    public function access_denied()
    {
        return view('access-denied');
    }
}
