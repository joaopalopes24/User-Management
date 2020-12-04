<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'cpf' => 'required',
            'status' => 'required',
            'perfil' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'success' => 'Usuário cadastrado com sucesso.',
            'failed' => 'Usuário não cadastrado. Favor entrar em contato com o Administrador.',
        ];
    }
}
