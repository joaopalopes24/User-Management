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

        $resource1 = [
            '0' => 'index',
            '1' => 'create',
            '2' => 'store',
        ];

        $resource2 = [
            '0' => 'show',
            '1' => 'edit',
            '2' => 'update',
            '3' => 'destroy',
        ];

        DB::table('tbl_profiles')->insert([
            'name' => 'Administrador Master',
            'status' => '$2y$10rH@g',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Home',
            'method' => 'index',
            'route' => 'home.index',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Home',
            'method' => 'detailed',
            'route' => 'home.detailed',
        ]);

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'Profile',
                'method' => $var,
                'route' => 'profiles.' . $var,
            ]);
        }

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'Menu',
                'method' => $var,
                'route' => 'menus.' . $var,
            ]);
        }

        foreach ($resource1 as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'Item',
                'method' => $var,
                'route' => 'menus.items.' . $var,
            ]);
        }

        foreach ($resource2 as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'Item',
                'method' => $var,
                'route' => 'items.' . $var,
            ]);
        }

        foreach ($resource as $var) {
            DB::table('tbl_methods')->insert([
                'class' => 'User',
                'method' => $var,
                'route' => 'users.' . $var,
            ]);
        }

        DB::table('tbl_methods')->insert([
            'class' => 'Permission',
            'method' => 'index',
            'route' => 'profiles.permissions.index',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Permission',
            'method' => 'store',
            'route' => 'profiles.permissions.store',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Página Inicial',
            'icon' => 'fa-dashboard',
            'status' => '$2y$10rH@g',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Administração',
            'icon' => 'fa-cogs',
            'status' => '$2y$10rH@g',
        ]);

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
            'name' => 'Perfis',
            'icon' => 'fa-share',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '3',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Menus',
            'icon' => 'fa-table',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '10',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Usuários',
            'icon' => 'fa-users',
            'status' => '$2y$10rH@g',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '24',
        ]);

        for ($i = 1; $i <= 32; $i++) {
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
            'status' => '$2y$10rH@g',
            'tbl_profiles_id' => '1',
        ]);
    }
}
