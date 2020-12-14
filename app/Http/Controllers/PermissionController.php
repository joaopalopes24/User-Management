<?php

namespace App\Http\Controllers;

use App\Models\Method;
use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index($id)
    {
        $dados = [
            'classes' => Method::class(),
            'methods' => Method::read(NULL,NULL,NULL),
            'permissions' => Permission::read($id,NULL),
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
