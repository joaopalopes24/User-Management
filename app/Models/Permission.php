<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Permission extends Model
{
    use HasFactory;

    protected $table = 'tbl_permissions as pe';

    public static function permissions(){

        $result = Permission::select('me.name as menu','me.icon as menu_icon','mi.name as item','mi.icon as item_icon','mt.route_name as route')
                            ->where('pe.tbl_profiles_id',Auth::id())
                            ->join('tbl_methods as mt','pe.tbl_methods_id','mt.id')
                            ->join('tbl_menus_items as mi', function($join){
                                $join->on('mt.id','mi.tbl_methods_id')
                                ->where('mi.status',1);
                            })
                            ->join('tbl_menus as me', function($join){
                                $join->on('mi.tbl_menus_id','me.id')
                                ->where('me.status',1);
                            })
                            ->get();
        
        return $result;
    }
}
