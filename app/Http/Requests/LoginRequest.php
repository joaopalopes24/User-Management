<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'login_incorrect' => 'Usuário e/ou Senha Incorretos.',
            'status_block' => 'Usuário Bloqueado. Favor entrar em contato com o Administrador.',
        ];
    }
}
