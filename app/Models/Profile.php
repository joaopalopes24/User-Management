<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'tbl_profiles';

    public static function read($id,$name,$status)
    {       
        $result = Profile::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($name, function ($query, $name) {
                return $query->where('name', $name);
            })
            ->when($status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->get();
        
        return $result;
    }

    public static function create($dados)
    {       
        $user = new Profile;

        $user->name = $dados['name'];
        $user->status = $dados['status'];
        
        return $user->save();
    }

    public static function modernize($id,$dados)
    {
        $user = Profile::find($id);

        $user->name = $dados['name'];
        $user->status = $dados['status'];
        
        return $user->save();
    }

    public static function erase($id)
    {
        $user = Profile::find($id);
        
        return $user->delete();
    }
}
