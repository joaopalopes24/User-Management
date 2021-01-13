<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    use HasFactory;

    protected $table = 'tbl_methods';

    public function item()
    {
        return $this->hasMany(Item::class,'tbl_methods_id');
    }

    public function permission()
    {
        return $this->hasMany(Permission::class,'tbl_methods_id');
    }

    public static function class()
    {       
        $result = Method::select('class')->distinct()->get();

        return $result;
    }

    public static function read($id,$class,$method,$route)
    {       
        $result = Method::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($class, function ($query, $class) {
                return $query->where('class', $class);
            })
            ->when($method, function ($query, $method) {
                return $query->where('method', $method);
            })
            ->when($route, function ($query, $route) {
                return $query->where('route', $route);
            })
            ->get();

        return $result;
    }

    public static function create($controller,$action,$route)
    {       
        $value = new Method;

        $value->class = $controller;
        $value->method = $action;
        $value->route = $route;

        return $value->save();
    }
}
