<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Permission extends Model
{
    use HasFactory;

    protected $table = 'tbl_permissions as pe';

    public static function permission_check($value)
    {       
        $result = Permission::select('pe.id as id','class','method','route')
            ->where('pe.tbl_profiles_id', Auth::id())
            ->join('tbl_methods as mt','pe.tbl_methods_id','mt.id')
            ->where('mt.route', $value)
            ->count();

        return $result;
    }

    public static function permission_menu()
    {
        $result = Permission::select('me.id as id', 'me.name as name', 'me.icon as icon')
            ->distinct('me.name')
            ->where('pe.tbl_profiles_id', Auth::id())
            ->join('tbl_methods as mt', 'pe.tbl_methods_id', 'mt.id')
            ->join('tbl_menus_items as mi','mt.id', 'mi.tbl_methods_id')
            ->where('mi.status', 1)
            ->join('tbl_menus as me','mi.tbl_menus_id', 'me.id')
            ->where('me.status', 1)
            ->get();

        return $result;
    }

    public static function permission_item()
    {
        $result = Permission::select('mi.tbl_menus_id as menu_id', 'mi.name as name', 'mi.icon as icon', 'mt.route as route')
            ->where('pe.tbl_profiles_id', Auth::id())
            ->join('tbl_methods as mt', 'pe.tbl_methods_id', 'mt.id')
            ->join('tbl_menus_items as mi','mt.id','mi.tbl_methods_id')
            ->where('mi.status', 1)
            ->join('tbl_menus as me','mi.tbl_menus_id', 'me.id')
            ->where('me.status', 1)
            ->get();

        return $result;
    }
}
