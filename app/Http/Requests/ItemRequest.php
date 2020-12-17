<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'icon' => 'required',
            'status' => 'required',
            'menu' => 'nullable',
            'method' => 'required',
        ];
    }
}