<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemRequest;
use App\Models\Item;
use App\Models\Method;

class ItemController extends Controller
{
    public function index($menu)
    {
        $dados = [
            'menu' => $menu,
            'items' => Item::read(NULL,NULL,NULL,$menu,NULL),
            'methods' => Method::read(NULL,NULL,NULL),
        ];

        return view('items.items-index',$dados);
    }

    public function create($menu)
    {
        $dados = [
            'menu' => $menu,
            'methods' => Method::read(NULL,NULL,NULL),
        ];

        return view('items.items-create',$dados);
    }

    public function store(ItemRequest $request, $menu)
    {
        $dados = $request->validated();

        Item::create($dados,$menu);

        return redirect()->route('menus.items.index',$menu)->withErrors(['success' => 'Item cadastrado com sucesso.']);
    }

    public function show($id)
    {
        return view('items.items-show');
    }

    public function edit($id)
    {
        return view('items.items-edit');
    }

    public function update(ItemRequest $request, $id)
    {
        //
    }
    
    public function destroy($id)
    {
        Item::erase($id);

        return redirect()->route('menus.index')->withErrors(['success' => 'Item deletado com sucesso.']);
    }
}
