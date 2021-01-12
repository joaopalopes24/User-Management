<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MenuRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'   => 'required',
            'icon'   => 'required',
            'status' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'name'   => 'Nome',
            'icon'   => 'Ícone',
            'status' => 'Status',
        ];
    }
}
