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

        $permissions = Permission::read(NULL,$id,NULL,NULL);

        foreach($permissions as $var1){
            $var1->route = str_replace(".","_",$var1->route);
        }

        while($var2 = current($values)){
            $answer = 0;
            foreach($permissions as $var1){
                if(key($values) == $var1->route){
                    $answer = 1;
                    break;
                }
            }
            if(!$answer){
                $route_correct = str_replace("_",".",key($values));
                $method = Method::read(NULL,NULL,NULL,$route_correct);
                Permission::create($id,$method->first()->id);
            }
            next($values);
        }

        foreach($permissions as $var1){
            if(!array_key_exists($var1->route,$values)){
                $route_correct = str_replace("_",".",$var1->route);
                $value = Permission::read(NULL,NULL,NULL,$route_correct);
                echo '<br>';
                print_r('Deletar permissao = '.$route_correct.' = '.$value->first()->id);
                dd($value);
                Permission::erase($value->first()->id);
            }
        }

        //return redirect()->route('profiles.index')->withErrors(['success' => 'Permissões alteradas com sucesso.']);
    }
}
