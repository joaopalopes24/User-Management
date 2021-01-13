<?php

namespace App\Models;

use App\Notifications\PasswordReset;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'tbl_users';

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function sendPasswordResetNotification($token)
    {
        $url = config('app.url').'/application/login/reset-password/'.$token;

        $this->notify(new PasswordReset($url));
    }

    public static function read($id,$name,$email,$number,$cpf,$status,$tbl_profiles_id)
    {       
        $result = User::select()
            ->when($id, function ($query, $id) {
                return $query->where('id', $id);
            })
            ->when($name, function ($query, $name) {
                return $query->where('name', $name);
            })
            ->when($email, function ($query, $email) {
                return $query->where('email', $email);
            })
            ->when($number, function ($query, $number) {
                return $query->where('number', $number);
            })
            ->when($cpf, function ($query, $cpf) {
                return $query->where('cpf', $cpf);
            })
            ->when($status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->when($tbl_profiles_id, function ($query, $tbl_profiles_id) {
                return $query->where('tbl_profiles_id', $tbl_profiles_id);
            })
            ->get();
        
        return $result;
    }

    public static function create($dados)
    {       
        $value = new User;

        $value->name = $dados['name'];
        $value->cpf = $dados['cpf'];
        $value->number = $dados['number'];
        $value->email = $dados['email'];
        $value->password = Hash::make('nova@123*');
        $value->status = $dados['status'];
        $value->tbl_profiles_id = $dados['profile'];
        
        return $value->save();
    }

    public static function modernize($id,$dados)
    {
        $value = User::find($id);

        $value->name = $dados['name'];
        $value->cpf = $dados['cpf'];
        $value->number = $dados['number'];
        $value->email = $dados['email'];
        $value->status = $dados['status'];
        $value->tbl_profiles_id = $dados['profile'];
        
        return $value->save();
    }

    public static function change($id,$password)
    {
        $value = User::find($id);

        $value->password = Hash::make($password);
        
        return $value->save();
    }

    public static function erase($id)
    {
        $value = User::find($id);
        
        return $value->delete();
    }
}
