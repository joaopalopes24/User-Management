<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Permission extends Model
{
    use HasFactory;

    protected $table = 'tbl_permissions';

    public static function permission_check($id,$route)
    {       
        $result = Permission::where('tbl_permissions.tbl_profiles_id', $id)
            ->join('tbl_methods','tbl_permissions.tbl_methods_id','tbl_methods.id')
            ->where('tbl_methods.route', $route)
            ->count();

        return $result;
    }

    public static function permission_menu()
    {
        $result = Permission::select('tbl_menus.id as id', 'tbl_menus.name as name', 'tbl_menus.icon as icon')
            ->distinct()
            ->where('tbl_permissions.tbl_profiles_id', Auth::user()->tbl_profiles_id)
            ->join('tbl_methods', 'tbl_permissions.tbl_methods_id', 'tbl_methods.id')
            ->join('tbl_menus_items','tbl_methods.id', 'tbl_menus_items.tbl_methods_id')
            ->where('tbl_menus_items.status', '$2y$10rH@g')
            ->join('tbl_menus','tbl_menus_items.tbl_menus_id', 'tbl_menus.id')
            ->where('tbl_menus.status', '$2y$10rH@g')
            ->get();

        return $result;
    }

    public static function permission_item()
    {
        $result = Permission::select('tbl_menus_items.tbl_menus_id as menu_id', 'tbl_menus_items.name as name', 'tbl_menus_items.icon as icon', 'tbl_methods.route as route')
            ->where('tbl_permissions.tbl_profiles_id', Auth::user()->tbl_profiles_id)
            ->join('tbl_methods as tbl_methods', 'tbl_permissions.tbl_methods_id', 'tbl_methods.id')
            ->join('tbl_menus_items','tbl_methods.id','tbl_menus_items.tbl_methods_id')
            ->where('tbl_menus_items.status', '$2y$10rH@g')
            ->join('tbl_menus','tbl_menus_items.tbl_menus_id', 'tbl_menus.id')
            ->where('tbl_menus.status', '$2y$10rH@g')
            ->get();

        return $result;
    }

    public static function read($id,$profile,$method)
    {       
        $result = Permission::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($profile, function ($query, $profile) {
                return $query->where('tbl_profiles_id', $profile);
            })
            ->when($method, function ($query, $method) {
                return $query->where('tbl_methods_id', $method);
            })
            ->get();

        return $result;
    }

    public static function create($profile,$method)
    {       
        $value = new Permission();

        $value->tbl_profiles_id = $profile;
        $value->tbl_methods_id = $method;

        return $value->save();
    }

    public static function erase($id)
    {       
        $value = Permission::find($id);
        
        return $value->delete();
    }
}
