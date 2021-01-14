<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Models\Menu;

class MenuController extends Controller
{
    public function index()
    {
        $dados = [
            'menus' => Menu::read(NULL,NULL,NULL),
        ];

        return view('menus.menus-index',$dados);
    }

    public function create()
    {
        return view('menus.menus-create');
    }

    public function store(MenuRequest $request)
    {
        $dados = $request->validated();

        Menu::create($dados);

        return redirect()->route('menus.index')->withErrors(['success' => trans('auth.store',['name' => 'Menu'])]);
    }

    public function show($id)
    {
        $dados = [
            'menus' => Menu::read($id,NULL,NULL),
        ];

        return view('menus.menus-show',$dados);
    }

    public function edit($id)
    {
        $dados = [
            'menus' => Menu::read($id,NULL,NULL),
        ];

        return view('menus.menus-edit',$dados);
    }

    public function update(MenuRequest $request, $id)
    {
        $dados = $request->validated();

        Menu::modernize($id,$dados);
        
        return redirect()->route('menus.index')->withErrors(['success' => trans('auth.update',['name' => 'Menu'])]);
    }
    
    public function destroy($id)
    {
        Menu::erase($id);

        return redirect()->route('menus.index')->withErrors(['success' => trans('auth.destroy',['name' => 'Menu'])]);
    }
}
