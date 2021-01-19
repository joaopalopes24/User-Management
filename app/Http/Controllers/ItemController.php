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
            'items' => Item::read(NULL,NULL,NULL,$menu,NULL),
        ];

        return view('items.items-index',$dados);
    }

    public function create($menu)
    {
        $dados = [
            'menu' => Menu::read($menu,NULL,NULL),
            'methods' => Method::available('GET','.fZEW.57&!'),
        ];

        return view('items.items-create',$dados);
    }

    public function store(ItemRequest $request, $menu)
    {
        $dados = $request->validated();

        Item::create($dados,$menu);

        return redirect()->route('menus.items.index',$menu)->withErrors(['success' => trans('auth.store',['name' => 'Item'])]);
    }

    public function show($id)
    {
        $dados = [
            'items' => Item::read($id,NULL,NULL,NULL,NULL),
        ];
        
        return view('items.items-show',$dados);
    }

    public function edit($id)
    {
        $dados = [
            'items' => Item::read($id,NULL,NULL,NULL,NULL),
            'menus' => Menu::read(NULL,NULL,NULL),
            'methods' => Method::available('GET','.fZEW.57&!'),
        ];

        return view('items.items-edit',$dados);
    }

    public function update(ItemRequest $request, $id)
    {
        $dados = $request->validated();

        Item::modernize($id,$dados);

        $items = Item::read($id,NULL,NULL,NULL,NULL);

        return redirect()->route('menus.items.index',$items->first()->tbl_menus_id)->withErrors(['success' => trans('auth.update',['name' => 'Item'])]);
    }
    
    public function destroy($id)
    {
        $items = Item::read($id,NULL,NULL,NULL,NULL);
        
        Item::erase($id);

        return redirect()->route('menus.items.index',$items->first()->tbl_menus_id)->withErrors(['success' => trans('auth.destroy',['name' => 'Item'])]);
    }
}
