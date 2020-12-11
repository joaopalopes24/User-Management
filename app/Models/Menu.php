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
        $user = new Menu;

        $user->name = $dados['name'];
        $user->icon = $dados['icon'];
        $user->status = $dados['status'];
        
        return $user->save();
    }

    public static function modernize($id,$dados)
    {
        $user = Menu::find($id);

        $user->name = $dados['name'];
        $user->icon = $dados['icon'];
        $user->status = $dados['status'];
        
        return $user->save();
    }

    public static function erase($id)
    {
        $user = Menu::find($id);
        
        return $user->delete();
    }
}
