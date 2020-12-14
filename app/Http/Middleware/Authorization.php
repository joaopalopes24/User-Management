<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\Method;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route as FacadesRoute;

class Authorization
{
    public function handle(Request $request, Closure $next)
    { 
        $route = FacadesRoute::currentRouteName();

        $route_exist = Method::read(NULL,NULL,NULL,$route);

        if($route_exist == '[]'){

            $way = FacadesRoute::currentRouteAction();

            list($va1,$va2,$va3,$controller_action) = explode('\\', $way);

            list($controller, $action) = explode('Controller@', $controller_action);

            Method::create($controller,$action,$route);

            return redirect()->route('home.access_denied');
        }

        $permission = Permission::permission_check(Auth::user()->tbl_profiles_id,$route);
        
        if(!$permission){
            return redirect()->route('home.access_denied');
        }

        return $next($request);
    }
}
