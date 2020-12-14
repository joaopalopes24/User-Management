<?php

namespace App\Http\Controllers;

use App\Models\Method;
use App\Models\Profile;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index($id)
    {
        $dados = [
            'profiles' => Profile::read($id,NULL,NULL),
            'classes' => Method::class(),
            'methods' => Method::read(NULL,NULL,NULL),
        ];

        return view('permissions.permissions-index',$dados);
    }

    public function store(Request $request, $id)
    {
        $dados = $request->all();

        dd($id,$dados);
    }
}
