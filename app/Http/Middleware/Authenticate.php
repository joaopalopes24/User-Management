<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Session\DatabaseSessionHandler;
use Illuminate\Support\Facades\Session;
use SessionHandler;

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

            /* if ((time() - Session::activity()) > (Config::get('session.lifetime') * 60))
            {
            // Session expired
            } */

            //dd((Session::getId()));

            return route('login.index');
        }
    }
}
