<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $dados = [
            'users' => User::index(),
            'profiles' => Profile::index(),
        ];
        
        return view('users.users-index',$dados);
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
