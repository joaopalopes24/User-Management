<?php

namespace App\Http\Controllers;

use App\Models\Method;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index()
    {
        $dados = [
            'methods' => Method::read(NULL,NULL,NULL),
        ];

        return view('permissions.permissions-index',$dados);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
