<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Permission extends Model
{
    use HasFactory;

    protected $table = 'tbl_permissions';

    public static function permission_check($value)
    {       
        $result = Permission::where('tbl_permissions.tbl_profiles_id', Auth::id())
            ->join('tbl_methods','tbl_permissions.tbl_methods_id','tbl_methods.id')
            ->where('tbl_methods.route', $value)
            ->count();

        return $result;
    }

    public static function permission_menu()
    {
        $result = Permission::select('tbl_menus.id as id', 'tbl_menus.name as name', 'tbl_menus.icon as icon')
            ->distinct('tbl_menus.name')
            ->where('tbl_permissions.tbl_profiles_id', Auth::id())
            ->join('tbl_methods', 'tbl_permissions.tbl_methods_id', 'tbl_methods.id')
            ->join('tbl_menus_items','tbl_methods.id', 'tbl_menus_items.tbl_methods_id')
            ->where('tbl_menus_items.status', 1)
            ->join('tbl_menus','tbl_menus_items.tbl_menus_id', 'tbl_menus.id')
            ->where('tbl_menus.status', 1)
            ->get();

        return $result;
    }

    public static function permission_item()
    {
        $result = Permission::select('tbl_menus_items.tbl_menus_id as menu_id', 'tbl_menus_items.name as name', 'tbl_menus_items.icon as icon', 'tbl_methods.route as route')
            ->where('tbl_permissions.tbl_profiles_id', Auth::id())
            ->join('tbl_methods as tbl_methods', 'tbl_permissions.tbl_methods_id', 'tbl_methods.id')
            ->join('tbl_menus_items','tbl_methods.id','tbl_menus_items.tbl_methods_id')
            ->where('tbl_menus_items.status', 1)
            ->join('tbl_menus','tbl_menus_items.tbl_menus_id', 'tbl_menus.id')
            ->where('tbl_menus.status', 1)
            ->get();

        return $result;
    }
}