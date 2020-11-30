<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route as FacadesRoute;

class Helpers
{
    public static function authetication_helper()
    {
        $route = FacadesRoute::current()->getName();

        if (Auth::check()) {

            return TRUE;

        } else {

            return FALSE;

        }
    }
}
