<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\Method;
use Illuminate\Support\Facades\Route as FacadesRoute;

class Authorization
{
    public function handle(Request $request, Closure $next)
    { 
        $route = FacadesRoute::currentRouteName();

        $route_exist = Method::method_check($route);

        if(!$route_exist){

            $way = FacadesRoute::currentRouteAction();

            list($va1,$va2,$va3,$controller_action) = explode('\\', $way);

            list($controller, $action) = explode('@', $controller_action);

            Method::create($controller,$action,$route);

            return redirect()->route('home.access_denied');
        }

        $permission = Permission::permission_check($route);
        
        if(!$permission){
            return redirect()->route('home.access_denied');
        }

        return $next($request);
    }
}
