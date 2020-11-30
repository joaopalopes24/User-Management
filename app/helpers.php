<?php

namespace App;

use Illuminate\Support\Facades\Route as FacadesRoute;

function authetication_helper(){

    $route = FacadesRoute::current()->getName();

    return $route;
}

