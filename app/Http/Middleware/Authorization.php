<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Permission;
use Illuminate\Support\Facades\Route as FacadesRoute;

class Authorization
{
    public function handle(Request $request, Closure $next)
    { 
        $route = FacadesRoute::current()->getName();

        print_r($route);
        echo '<br><br>';

        $permission = Permission::permission_check($route);

        print_r($permission);
        
        if(!$permission){
            return redirect()->route('home.access_denied');
        }

        return $next($request);
    }
}
