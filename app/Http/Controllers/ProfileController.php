<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function index()
    {
        $dados = [
            'profiles' => Profile::read(NULL,NULL,NULL),
        ];

        return view('profiles.profiles-index',$dados);
    }

    public function create()
    {
        return view('profiles.profiles-create');
    }

    public function store(ProfileRequest $request)
    {
        $dados = $request->validated();

        Profile::create($dados);

        return redirect()->route('profiles.index')->withErrors(['success' => 'Perfil cadastrado com sucesso.']);
    }

    public function show($id)
    {
        $dados = [
            'profiles' => Profile::read($id,NULL,NULL),
        ];

        return view('profiles.profiles-show',$dados);
    }

    public function edit($id)
    {
        $dados = [
            'profiles' => Profile::read($id,NULL,NULL),
        ];

        return view('profiles.profiles-edit',$dados);
    }

    public function update(ProfileRequest $request, $id)
    {
        $dados = $request->validated();

        Profile::modernize($id,$dados);
        
        return redirect()->route('profiles.index')->withErrors(['success' => 'Perfil editado com sucesso.']);
    }
    
    public function destroy($id)
    {
        Profile::erase($id);

        return redirect()->route('profiles.index')->withErrors(['success' => 'Perfil deletado com sucesso.']);
    }
}
