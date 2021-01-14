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
            'users' => User::read(NULL,NULL,NULL,NULL,NULL,NULL,NULL),
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

        return redirect()->route('users.index')->withErrors(['success' => trans('auth.store',['name' => 'Usuário'])]);
    }

    public function show($id)
    {
        $dados = [
            'users' => User::read($id,NULL,NULL,NULL,NULL,NULL,NULL),
        ];

        return view('users.users-show',$dados);
    }

    public function edit($id)
    {
        $dados = [
            'users' => User::read($id,NULL,NULL,NULL,NULL,NULL,NULL),
            'profiles' => Profile::read(NULL,NULL,NULL),
        ];

        return view('users.users-edit',$dados);
    }

    public function update(UserRequest $request, $id)
    {
        $dados = $request->validated();

        User::modernize($id,$dados);
        
        return redirect()->route('users.index')->withErrors(['success' => trans('auth.update',['name' => 'Usuário'])]);
    }
    
    public function destroy($id)
    {
        User::erase($id);

        return redirect()->route('users.index')->withErrors(['success' => trans('auth.destroy',['name' => 'Usuário'])]);
    }
}
