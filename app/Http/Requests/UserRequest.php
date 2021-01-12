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
            'name'    => 'required',
            'cpf'     => 'required|size:11',
            'number'  => 'required|size:11',
            'email'   => 'required|email',
            'status'  => 'required',
            'profile' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'name'    => 'Nome',
            'cpf'     => 'CPF',
            'number'  => 'Telefone',
            'email'   => 'E-mail',
            'status'  => 'Status',
            'profile' => 'Perfil',
        ];
    }
}
