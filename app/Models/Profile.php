<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'tbl_profiles';

    public static function index()
    {       
        $result = Profile::all();
        
        return $result;
    }

    public static function read($id)
    {       
        $result = Profile::where('id',$id)->get();
        
        return $result;
    }
}
