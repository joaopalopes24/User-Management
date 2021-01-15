<?php

namespace App\Exceptions;

use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontReport = [
        //
    ];

    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];
    
    public function register()
    {
        $this->renderable(function (QueryException $e, $request) {
            //return redirect()->back()->withErrors(trans('auth.query'));
            //Pegar o Código do Erro dd($e->getCode());
            //Pegar as Informações do Erro dd($e->errorInfo);
            //dd($e->errorInfo);
        });

        $this->renderable(function (Throwable $e) {
            //return view('errors.500');
        });
    } 
}
