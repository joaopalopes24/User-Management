<?php

namespace App\Http\Middleware;

use App\Models\Session as DB;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Session;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            if(count(Session::all()) == '1'){
                Session::flash('expired','Sessão Expirada. Favor realizar novamente o login.');
            }
            return route('login.index');
        }
    }
}
