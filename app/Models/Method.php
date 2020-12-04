<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    use HasFactory;

    protected $table = 'tbl_methods';

    public static function read($value)
    {       
        $result = Method::where('route',$value)->count();

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
