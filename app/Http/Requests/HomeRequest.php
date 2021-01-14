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
            'key_old'          => 'required|password|string|min:8',
            'key'              => 'required|confirmed|string|min:8',
        ];
    }
}
