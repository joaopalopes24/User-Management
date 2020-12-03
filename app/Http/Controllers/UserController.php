<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('users.users-index');
    }

    public function create()
    {
        return view('users.users-create');
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return view('users.users-show');
    }

    public function edit($id)
    {
        return view('users.users-edit');
    }

    public function update(Request $request, $id)
    {
        //
    }
    
    public function destroy($id)
    {
        print_r('teste');
    }
}
