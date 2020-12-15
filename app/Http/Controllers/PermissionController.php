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

        $permissions = Permission::read(NULL,$id,NULL);

        while(current($values)){
            $answer = 0;
            foreach($permissions as $var1){
                if(key($values) == $var1->tbl_methods_id){
                    $answer = 1;
                    break;
                }
            }
            if(!$answer){
                Permission::create($id,key($values));
            }
            next($values);
        }

        foreach($permissions as $var1){
            if(!array_key_exists($var1->tbl_methods_id,$values)){
                $value = Permission::read(NULL,NULL,$var1->tbl_methods_id);
                Permission::erase($value->first()->id);
            }
        }

        return redirect()->route('profiles.index')->withErrors(['success' => 'Permissões alteradas com sucesso.']);
    }
}
