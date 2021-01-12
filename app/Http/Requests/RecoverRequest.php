<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecoverRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email'    => 'required|email',
        ];
    }

    public function attributes()
    {
        return [
            'email'    => 'E-mail',
        ];
    }
}
