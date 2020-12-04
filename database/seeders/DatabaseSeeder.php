<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $resource = [
            '0' => 'index',
            '1' => 'create',
            '2' => 'store',
            '3' => 'show',
            '4' => 'edit',
            '5' => 'update',
            '6' => 'destroy',
        ];

        DB::table('tbl_profiles')->insert([
            'name' => 'Administrador Master',
            'status' => '2',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'HomeController',
            'method' => 'index',
            'route' => 'home.index',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'HomeController',
            'method' => 'detailed',
            'route' => 'home.detailed',
        ]);

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'ProfileController',
                'method' => $var,
                'route' => 'profiles.' . $var,
            ]);
        }

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'MenuController',
                'method' => $var,
                'route' => 'menus.' . $var,
            ]);
        }

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'ItemController',
                'method' => $var,
                'route' => 'items.' . $var,
            ]);
        }

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'UserController',
                'method' => $var,
                'route' => 'users.' . $var,
            ]);
        }

        DB::table('tbl_menus')->insert([
            'name' => 'Página Inicial',
            'icon' => 'fa-dashboard',
            'status' => '2',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Administração',
            'icon' => 'fa-cogs',
            'status' => '2',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Geral',
            'icon' => 'fa-align-left',
            'status' => '2',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Detalhado',
            'icon' => 'fa-pie-chart',
            'status' => '2',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '2',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Perfis',
            'icon' => 'fa-share',
            'status' => '2',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '3',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Menus',
            'icon' => 'fa-table',
            'status' => '2',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '10',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Usuários',
            'icon' => 'fa-users',
            'status' => '2',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '24',
        ]);

        for ($i = 1; $i <= 30; $i++) {
            DB::table('tbl_permissions')->insert([
                'tbl_profiles_id' => '1',
                'tbl_methods_id' => $i,
            ]);
        }

        DB::table('tbl_users')->insert([
            'name' => 'João Pedro de Aguiar Lopes',
            'email' => 'joaopalopes24@gmail.com',
            'number' => '(38) 99144-6655',
            'password' => '$2y$10$JNo7V4EixKK5j9nQ.QutxuTqTuQdt9QDLfaoe7dQDhZ1TSPgDd8eS',
            'cpf' => '072.778.466-80',
            'status' => '2',
            'tbl_profiles_id' => '1',
        ]);
    }
}
