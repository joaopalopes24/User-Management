<?php

namespace App\Http\Controllers;

use App\Models\Method;
use App\Models\Permission;
use App\Models\Profile;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index($id)
    {
        $dados = [
            'profiles' => Profile::read($id,NULL,NULL),
            'classes' => Method::class(),
            'methods' => Method::read(NULL,NULL,NULL,NULL),
        ];

        return view('permissions.permissions-index',$dados);
    }

    public function store(Request $request, $id)
    {
        $values = $request->except(['_token']);

        $permissions = Permission::read(NULL,$id,NULL)->toArray();

        while($var = current($values)){
            if(array_search(key($values),array_column($permissions,'tbl_methods_id')) === false){
                Permission::create($id,key($values));
            }
            next($values);
        }

        while($var = current($permissions)){
            if(!array_key_exists($var['tbl_methods_id'],$values)){
                $value = Permission::read(NULL,$id,$var['tbl_methods_id']);
                Permission::erase($value->first()->id);
            }
            next($permissions);
        }

        $profile = Profile::read($id,NULL,NULL);

        return redirect()->route('profiles.index')->withErrors(['success' => trans('auth.permission',['name' => $profile->first()->name])]);
    }
}
