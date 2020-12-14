<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemRequest;
use App\Models\Item;
use App\Models\Menu;
use App\Models\Method;

class ItemController extends Controller
{
    public function index($menu)
    {
        $dados = [
            'menu' => Menu::read($menu,NULL,NULL),
            'items' => Item::read(NULL,NULL,NULL,$menu,NULL),
            'methods' => Method::read(NULL,NULL,NULL,NULL),
        ];

        return view('items.items-index',$dados);
    }

    public function create($menu)
    {
        $dados = [
            'menu' => Menu::read($menu,NULL,NULL),
            'methods' => Method::read(NULL,NULL,NULL,NULL),
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
        $items = Item::read($id,NULL,NULL,NULL,NULL);
        $menu = Menu::read($items->first()->tbl_menus_id,NULL,NULL);
        $method = Method::read($items->first()->tbl_methods_id,NULL,NULL,NULL);

        $dados = [
            'menu' => $menu,
            'method' => $method,
            'items' => $items,
        ];
        
        return view('items.items-show',$dados);
    }

    public function edit($id)
    {
        $items = Item::read($id,NULL,NULL,NULL,NULL);
        $menu = Menu::read($items->first()->tbl_menus_id,NULL,NULL);

        $dados = [
            'menus' => Menu::read(NULL,NULL,NULL),
            'menu' => $menu,
            'methods' => Method::read(NULL,NULL,NULL,NULL),
            'items' => $items,
        ];

        return view('items.items-edit',$dados);
    }

    public function update(ItemRequest $request, $id)
    {
        $dados = $request->validated();

        Item::modernize($id,$dados);

        $items = Item::read($id,NULL,NULL,NULL,NULL);

        return redirect()->route('menus.items.index',$items->first()->tbl_menus_id)->withErrors(['success' => 'Item editado com sucesso.']);
    }
    
    public function destroy($id)
    {
        $items = Item::read($id,NULL,NULL,NULL,NULL);

        $menu = $items->first()->tbl_menus_id;
        
        Item::erase($id);

        return redirect()->route('menus.items.index',$menu)->withErrors(['success' => 'Item deletado com sucesso.']);
    }
}
