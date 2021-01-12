<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'   => 'required',
            'status' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'name'   => 'Nome',
            'status' => 'Status',
        ];
    }
}
