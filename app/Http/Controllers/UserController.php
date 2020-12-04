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

        $result = User::create($dados);

        if(!$result){
            return redirect()->route('users.index')->withErrors(['failed' => 'Usuário não cadastrado. Favor entrar em contato com o Administrador.']);
        }

        return redirect()->route('users.index')->withErrors(['success' => 'Usuário cadastrado com sucesso.']);
    }

    public function show($id)
    {
        $users = User::read($id,NULL,NULL,NULL,NULL,NULL,NULL);
        $id_perfil = $users->first()->tbl_profiles_id;

        $dados = [
            'users' => $users,
            'profiles' => Profile::read($id_perfil,NULL,NULL),
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

        return redirect()->route('users.index')->withErrors(['success' => 'Usuário editado com sucesso.']);
    }
    
    public function destroy($id)
    {
        User::erase($id);

        return redirect()->route('users.index')->withErrors(['success' => 'Usuário deletado com sucesso.']);
    }
}
