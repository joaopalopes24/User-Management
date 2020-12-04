<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\Profile;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $dados = [
            'users' => User::read(NULL,NULL,NULL,NULL,NULL,1,NULL),
            'profiles' => Profile::read(NULL,NULL,NULL),
        ];
        
        return view('users.users-index',$dados);
    }

    public function create()
    {
        $dados = [
            'profiles' => Profile::read(NULL,NULL,NULL),
        ];

        return view('users.users-create',$dados);
    }

    public function store(UserRequest $request)
    {
        $dados = $request->validated();

        User::create($dados);

        return redirect()->route('users.index')->withErrors(['success' => 'Usuário cadastrado com sucesso.']);
    }

    public function show($id)
    {
        return view('users.users-show');
    }

    public function edit($id)
    {
        return view('users.users-edit');
    }

    public function update(UserRequest $request, $id)
    {
        //
    }
    
    public function destroy($id)
    {
        print_r('teste');
    }
}
