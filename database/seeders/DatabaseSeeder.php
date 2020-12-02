<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tbl_profiles')->insert([
            'name' => 'Administrador',
            'status' => '1',
        ]);

        DB::table('tbl_methods')->insert([
            'class' => 'Home',
            'method' => 'index',
            'route_name' => 'home.index',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Página Inicial',
            'icon' => 'fa-dashboard',
            'status' => '1',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Administração',
            'icon' => 'fa-cogs',
            'status' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Geral',
            'icon' => 'fa-dashboard',
            'status' => '1',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Detalhado',
            'icon' => 'fa-dashboard',
            'status' => '1',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Perfis',
            'icon' => 'fa-share',
            'status' => '1',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Menus',
            'icon' => 'fa-table',
            'status' => '1',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Usuários',
            'icon' => 'fa-users',
            'status' => '1',
            'tbl_menus_id' => '2',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_permissions')->insert([
            'tbl_profiles_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_users')->insert([
            'name' => 'João Pedro de Aguiar Lopes',
            'email' => 'joaopalopes24@gmail.com',
            'password' => '$2y$10$MqOPhh86vMOR.cKhB6Ree.H2fMgXbj/gTbaggCvD5rfl9DQyAbhS.',
            'cpf' => '072.778.466-80',
            'status' => '1',
            'tbl_profiles_id' => '1',
        ]);
    }
}
