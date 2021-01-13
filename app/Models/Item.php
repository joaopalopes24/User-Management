<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = 'tbl_menus_items';

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function method()
    {
        return $this->belongsTo(Method::class);
    }

    public static function read($id,$name,$status,$menu,$method)
    {       
        $result = Item::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($name, function ($query, $name) {
                return $query->where('name', $name);
            })
            ->when($status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->when($menu, function ($query, $menu) {
                return $query->where('tbl_menus_id', $menu);
            })
            ->when($method, function ($query, $method) {
                return $query->where('tbl_methods_id', $method);
            })
            ->get();
        
        return $result;
    }

    public static function create($dados,$menu_id)
    {       
        $value = new Item;

        $value->name = $dados['name'];
        $value->icon = $dados['icon'];
        $value->status = $dados['status'];
        $value->tbl_menus_id = $menu_id;
        $value->tbl_methods_id = $dados['method'];
        
        return $value->save();
    }

    public static function modernize($id,$dados)
    {
        $value = Item::find($id);

        $value->name = $dados['name'];
        $value->icon = $dados['icon'];
        $value->status = $dados['status'];
        $value->tbl_menus_id = $dados['menu'];
        $value->tbl_methods_id = $dados['method'];
        
        return $value->save();
    }

    public static function erase($id)
    {
        $value = Item::find($id);
        
        return $value->delete();
    }
}
