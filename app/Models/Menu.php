<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'tbl_menus';

    public static function read($id,$name,$status)
    {       
        $result = Menu::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($name, function ($query, $name) {
                return $query->where('name', $name);
            })
            ->when($status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->get();
        
        return $result;
    }

    public static function create($dados)
    {       
        $value = new Menu;

        $value->name = $dados['name'];
        $value->icon = $dados['icon'];
        $value->status = $dados['status'];
        
        return $value->save();
    }

    public static function modernize($id,$dados)
    {
        $value = Menu::find($id);

        $value->name = $dados['name'];
        $value->icon = $dados['icon'];
        $value->status = $dados['status'];
        
        return $value->save();
    }

    public static function erase($id)
    {
        $value = Menu::find($id);
        
        return $value->delete();
    }
}
