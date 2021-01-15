<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'cpf'     => 'required|size:14',
            'number'  => 'required|size:15',
            'email'   => 'required|email',
            'status'  => ['required',Rule::in(['$2y$10rH@g', '.fZEW.57&!'])],
            'profile' => 'required',
        ];
    }
}
