<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'tbl_profiles';

    public function permission()
    {
        return $this->hasMany(Permission::class);
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }

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
        $value = new Profile;

        $value->name = $dados['name'];
        $value->status = $dados['status'];
        
        return $value->save();
    }

    public static function modernize($id,$dados)
    {
        $value = Profile::find($id);

        $value->name = $dados['name'];
        $value->status = $dados['status'];
        
        return $value->save();
    }

    public static function erase($id)
    {
        $value = Profile::find($id);
        
        return $value->delete();
    }
}
