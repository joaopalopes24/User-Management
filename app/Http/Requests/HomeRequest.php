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
            'password_old' => 'required|min:8',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|min:8',
        ];
    }
}
