<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $resource = [
            ['index','GET','.fZEW.57&!'],
            ['create','GET','.fZEW.57&!'],
            ['store','POST','.fZEW.57&!'],
            ['show','GET','$2y$10rH@g'],
            ['edit','GET','$2y$10rH@g'],
            ['update','PUT','$2y$10rH@g'],
            ['destroy','DELETE','$2y$10rH@g'],
        ];

        $resource1 = [
            ['index','GET','$2y$10rH@g'],
            ['create','GET','$2y$10rH@g'],
            ['store','POST','$2y$10rH@g'],
        ];

        $resource2 = [
            ['show','GET','$2y$10rH@g'],
            ['edit','GET','$2y$10rH@g'],
            ['update','PUT','$2y$10rH@g'],
            ['destroy','DELETE','$2y$10rH@g'],
        ];

        //Criação do Perfil
        DB::table('tbl_profiles')->insert([
            'name' => 'Administrador Master',
            'status' => '$2y$10rH@g',
        ]);
        //FIM
        
        //Criação dos Métodos
        DB::table('tbl_methods')->insert([
            'class' => 'Home',
            'method' => 'index',
            'route' => 'home.index',
            'type' => 'GET',
            'parameters' => '.fZEW.57&!',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Home',
            'method' => 'detailed',
            'route' => 'home.detailed',
            'type' => 'GET',
            'parameters' => '.fZEW.57&!',
        ]);

        foreach ($resource as list($var,$type,$parameters)) {
            DB::table('tbl_methods')->insert([
                'class' => 'Profile',
                'method' => $var,
                'route' => 'profiles.' . $var,
                'type' => $type,
                'parameters' => $parameters,
            ]);
        }

        foreach ($resource as list($var,$type,$parameters)) {
            DB::table('tbl_methods')->insert([
                'class' => 'Menu',
                'method' => $var,
                'route' => 'menus.' . $var,
                'type' => $type,
                'parameters' => $parameters,
            ]);
        }

        foreach ($resource1 as list($var,$type,$parameters)) {
            DB::table('tbl_methods')->insert([
                'class' => 'Item',
                'method' => $var,
                'route' => 'menus.items.' . $var,
                'type' => $type,
                'parameters' => $parameters,
            ]);
        }

        foreach ($resource2 as list($var,$type,$parameters)) {
            DB::table('tbl_methods')->insert([
                'class' => 'Item',
                'method' => $var,
                'route' => 'items.' . $var,
                'type' => $type,
                'parameters' => $parameters,
            ]);
        }

        foreach ($resource as list($var,$type,$parameters)) {
            DB::table('tbl_methods')->insert([
                'class' => 'User',
                'method' => $var,
                'route' => 'users.' . $var,
                'type' => $type,
                'parameters' => $parameters,
            ]);
        }

        DB::table('tbl_methods')->insert([
            'class' => 'Permission',
            'method' => 'index',
            'route' => 'profiles.permissions.index',
            'type' => 'GET',
            'parameters' => '$2y$10rH@g',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Permission',
            'method' => 'store',
            'route' => 'profiles.permissions.store',
            'type' => 'POST',
            'parameters' => '$2y$10rH@g',
        ]);
        //FIM
        
        //Criação dos Menus
        DB::table('tbl_menus')->insert([
            'name' => 'Página Inicial',
            'icon' => 'fa-dashboard',
            'status' => '$2y$10rH@g',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Perfis',
            'icon' => 'fa-share',
            'status' => '$2y$10rH@g',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Menus',
            'icon' => 'fa-table',
            'status' => '$2y$10rH@g',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Usuários',
            'icon' => 'fa-users',
            'status' => '$2y$10rH@g',
        ]);
        //FIM
        
        //Criação dos Items dos Menus
        DB::table('tbl_menus_items')->insert([
            'name' => 'Geral',
            'icon' => 'fa-align-left',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Detalhado',
            'icon' => 'fa-pie-chart',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '2',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Status',
            'icon' => 'fa-list-ul',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '3',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Cadastro',
            'icon' => 'fa-plus',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '4',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Status',
            'icon' => 'fa-list-ul',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '3',
            'tbl_methods_id' => '10',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Cadastro',
            'icon' => 'fa-plus',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '3',
            'tbl_methods_id' => '11',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Status',
            'icon' => 'fa-list-ul',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '4',
            'tbl_methods_id' => '24',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Cadastro',
            'icon' => 'fa-plus',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '4',
            'tbl_methods_id' => '25',
        ]);
        //FIM
        
        //Criação das Permissões
        for ($i = 1; $i <= 32; $i++) {
            DB::table('tbl_permissions')->insert([
                'tbl_profiles_id' => '1',
                'tbl_methods_id' => $i,
            ]);
        }
        //FIM

        //Criação dos Usuários
        DB::table('tbl_users')->insert([
            'name' => 'João Pedro de Aguiar Lopes',
            'email' => 'joaopalopes24@gmail.com',
            'number' => '(38) 99144-6655',
            'password' => '$2y$10$Gc77rU95SOcyP2bYALMiB.ZqygNwJFDpx83CMFAyKI.ZRZuxtCWg2',
            'cpf' => '072.778.466-80',
            'status' => '$2y$10rH@g',
            'tbl_profiles_id' => '1',
        ]);
        //FIM
    }
}
