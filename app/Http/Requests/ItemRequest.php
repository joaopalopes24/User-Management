<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ItemRequest extends FormRequest
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
            'status' => ['required',Rule::in(['$2y$10rH@g', '.fZEW.57&!'])],
            'menu'   => 'nullable',
            'method' => 'required',
        ];
    }
}
