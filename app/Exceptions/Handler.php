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
            //Pegar o Código do Erro dd($e->getCode());
            //Pegar as Informações do Erro dd($e->errorInfo);
            if($e->getCode() == 23000){
                return redirect()->back()->withErrors(trans('auth.query'));
            }
        });

        $this->renderable(function (Throwable $e) {
            //dd($e->getCode());
            //return view('errors.500');
        });
    } 
}
