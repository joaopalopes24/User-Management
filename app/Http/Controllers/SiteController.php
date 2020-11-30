<?php

namespace App\Http\Controllers;

class SiteController extends Controller
{
    public function index(){

        $pagina['valor'] = 0;

        return view('site.index',$pagina);
    }

    public function sobre(){

        $pagina['valor'] = 1;

        return view('site.sobre',$pagina);
    }

    public function midia(){

        $pagina['valor'] = 2;

        return view('site.midia',$pagina);
    }

    public function fale_conosco(){

        $pagina['valor'] = 3;

        return view('site.fale-conosco',$pagina);
    }
}
