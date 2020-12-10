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
            'status' => 'required',
            'profile' => 'required',
        ];
    }
}
