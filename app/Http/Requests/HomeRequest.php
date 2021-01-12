<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'password_old'          => 'required|password|string|min:8',
            'password'              => 'required|confirmed|string|min:8',
        ];
    }

    public function attributes()
    {
        return [
            'password_old'          => 'Senha Atual',
            'password'              => 'Nova Senha',
        ];
    }
}
