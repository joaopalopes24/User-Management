<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    use HasFactory;

    protected $table = 'tbl_methods';

    public static function method_check($route)
    {       
        $result = Method::where('route',$route)->count();

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
        $method = new Method;

        $method->class = $controller;
        $method->method = $action;
        $method->route = $route;

        return $method->save();
    }
}
