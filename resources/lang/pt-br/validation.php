<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => '":attribute" precisa ser aceito.',
    'active_url'           => '":attribute" infelizmente não é uma URL válida.',
    'after'                => '":attribute" precisa ser uma data depois de :date.',
    'after_or_equal'       => '":attribute" precisa ser uma data posterior ou igual a :date.',
    'alpha'                => '":attribute" deve conter somente letras.',
    'alpha_dash'           => '":attribute" deve conter letras, números e traços.',
    'alpha_num'            => '":attribute" deve conter somente letras e números.',
    'array'                => '":attribute" precisa ser um array.',
    'before'               => '":attribute" precisa ser uma data antes de :date.',
    'before_or_equal'      => '":attribute" precisa ser uma data anterior ou igual a :date.',
    'between'              => [
        'numeric' => 'Ops, ":attribute" deve estar entre :min e :max.',
        'file'    => 'Ops, ":attribute" deve estar entre :min e :max kilobytes.',
        'string'  => 'Ops, ":attribute" deve estar entre :min e :max caracteres.',
        'array'   => 'Ops, ":attribute" precisa ter entre :min e :max itens.',
    ],
    'boolean'              => '":attribute" precisa ser verdadeiro ou falso.',
    'confirmed'            => 'A confirmação de ":attribute" não confere.',
    'date'                 => '":attribute" infelizmente não é uma data válida.',
    'date_equals'          => '":attribute" precisa ser igual a :date.',
    'date_format'          => '":attribute" infelizmente não confere com o formato :format.',
    'different'            => '":attribute" e :other devem ser diferentes.',
    'digits'               => '":attribute" precisa ter :digits dígitos.',
    'digits_between'       => '":attribute" precisa ter entre :min e :max dígitos.',
    'dimensions'           => '":attribute" tem dimensões de imagem inválidas.',
    'distinct'             => '":attribute" tem um valor duplicado.',
    'email'                => '":attribute" precisa ser um endereço de e-mail válido.',
    'ends_with'            => '":attribute" deve terminar com um dos seguintes valores: :values.',
    'exists'               => '":attribute" selecionado é inválido.',
    'file'                 => '":attribute" precisa ser um arquivo.',
    'filled'               => '":attribute" é um campo requerido.',
    'gt'                   => [
        'numeric' => '":attribute" deve ser maior que :value.',
        'file'    => '":attribute" deve ser maior que :value kilobytes.',
        'string'  => '":attribute" deve ser maior que :value characters.',
        'array'   => '":attribute" deve ter mais de :value itens.',
    ],
    'gte'                  => [
        'numeric' => '":attribute" deve ser maior ou igual :value.',
        'file'    => '":attribute" deve ser maior ou igual :value kilobytes.',
        'string'  => '":attribute" deve ser maior ou igual :value caracteres.',
        'array'   => '":attribute" deve ter :value itens ou mais.',
    ],
    'image'                => '":attribute" precisa ser uma imagem.',
    'in'                   => '":attribute" é inválido.',
    'in_array'             => '":attribute" não existe em :other.',
    'integer'              => '":attribute" precisa ser um inteiro.',
    'ip'                   => '":attribute" precisa ser um endereço IP válido.',
    'ipv4'                 => '":attribute" precisa ser um endereço IPv4 válido.',
    'ipv6'                 => '":attribute" precisa ser um endereço IPv6 válido.',
    'json'                 => '":attribute" precisa ser um JSON válido.',
    'lt'                   => [
        'numeric' => '":attribute" deve ser menor que :value.',
        'file'    => '":attribute" deve ser menor que :value kilobytes.',
        'string'  => '":attribute" deve ser menor que :value caracteres.',
        'array'   => '":attribute" deve ter menos que :value itens.',
    ],
    'lte'                  => [
        'numeric' => '":attribute" deve ser menor ou igual a :value.',
        'file'    => '":attribute" deve ser menor ou igual a :value kilobytes.',
        'string'  => '":attribute" deve ser menor ou igual a :value caracteres.',
        'array'   => '":attribute" não deve ter mais que :value itens.',
    ],
    'max'                  => [
        'numeric' => '":attribute" não pode ser maior que :max.',
        'file'    => '":attribute" não pode ser maior que :max kilobytes.',
        'string'  => '":attribute" não pode ser maior que :max caracteres.',
        'array'   => '":attribute" não pode ter maais que :max itens.',
    ],
    'mimes'                => '":attribute" precisa ser um arquivo do tipo: :values.',
    'mimetypes'            => '":attribute" precisa ser um arquivo do tipo: :values.',
    'min'                  => [
        'numeric' => '":attribute" precisa ser no mínimo :min.',
        'file'    => '":attribute" precisa ter no mínimo :min kilobytes.',
        'string'  => '":attribute" precisa ter no mínimo :min caracteres.',
        'array'   => '":attribute" precisa ter no mínimo :min itens.',
    ],
    'multiple_of'          => '":attribute" deve ser múltiplo de :value',
    'not_in'               => 'O ":attribute" selecionado é inválido.',
    'not_regex'            => '":attribute" está em um formato não válido.',
    'numeric'              => '":attribute" precisa ser um número.',
    'password'             => 'A senha digitada está incorreta.',
    'present'              => 'O campo ":attribute" precisa ser presente.',
    'regex'                => 'O formato de ":attribute" é inválido.',
    'required'             => 'O campo ":attribute" precisa ser informado.',
    'required_if'          => 'O campo ":attribute" precisa ser informado quando :other é :value.',
    'required_unless'      => 'O ":attribute" é necessário a menos que :other esteja em :values.',
    'required_with'        => 'O campo ":attribute" precisa ser informado quando :values está presente.',
    'required_with_all'    => 'O campo ":attribute" precisa ser informado quando :values estão presentes.',
    'required_without'     => 'O campo ":attribute" precisa ser informado quando :values não está presente.',
    'required_without_all' => 'O campo ":attribute" precisa ser informado quando nenhum destes estão presentes: :values.',
    'same'                 => '":attribute" e :other devem ser iguais.',
    'size'                 => [
        'numeric' => 'Ops, ":attribute" precisa ser :size.',
        'file'    => 'Ops, ":attribute" precisa ter :size kilobytes.',
        'string'  => 'Ops, ":attribute" precisa ter :size caracteres.',
        'array'   => 'Ops, ":attribute" deve conter :size itens.',
    ],
    'starts_with'          => '":attribute" deve começar com um dos seguintes valores: :values.',
    'string'               => 'Ops, ":attribute" precisa ser uma string.',
    'timezone'             => 'Ops, ":attribute" precisa ser uma timezone válida.',
    'unique'               => 'Ops, ":attribute" já está em uso.',
    'uploaded'             => 'Ops, ":attribute" falhou ao ser enviado.',
    'url'                  => 'O formato de ":attribute" é inválido.',
    'uuid'                 => '":attribute" deve ser um UUID válido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
