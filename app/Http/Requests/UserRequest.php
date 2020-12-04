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
            'cpf' => 'required',
            'number' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'status' => 'required',
            'profile' => 'required',
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
