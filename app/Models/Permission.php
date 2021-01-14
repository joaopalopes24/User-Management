<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $table = 'tbl_permissions';

    public function method()
    {
        return $this->belongsTo(Method::class,'tbl_methods_id');
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class,'tbl_profiles_id');
    }

    public static function read($id,$profile,$method)
    {       
        $result = Permission::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($profile, function ($query, $profile) {
                return $query->where('tbl_profiles_id', $profile);
            })
            ->when($method, function ($query, $method) {
                return $query->where('tbl_methods_id', $method);
            })
            ->get();

        return $result;
    }

    public static function create($profile,$method)
    {       
        $value = new Permission();

        $value->tbl_profiles_id = $profile;
        $value->tbl_methods_id = $method;

        return $value->save();
    }

    public static function erase($id)
    {       
        $value = Permission::find($id);
        
        return $value->delete();
    }
}
