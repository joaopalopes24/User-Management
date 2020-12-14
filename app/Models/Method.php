<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    use HasFactory;

    protected $table = 'tbl_methods';

    public static function class()
    {       
        $result = Method::select('class')->distinct()->get();

        return $result;
    }

    public static function read($class,$method,$route)
    {       
        $result = Method::select()
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
