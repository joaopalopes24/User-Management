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
            'route_name' => 'home.index',
        ]);

        DB::table('tbl_menus')->insert([
            'name' => 'Página Inicial',
            'icon' => 'fa-dashboard',
            'status' => '1',
        ]);

        DB::table('tbl_menus_items')->insert([
            'name' => 'Geral',
            'icon' => 'fa-dashboard',
            'status' => '1',
            'tbl_menus_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_permissions')->insert([
            'tbl_profiles_id' => '1',
            'tbl_methods_id' => '1',
        ]);

        DB::table('tbl_users')->insert([
            'name' => 'João Pedro de Aguiar Lopes',
            'email' => 'joaopalopes24@gmail.com',
            'password' => '$2y$10$c2.PtO3Joobm0aQduMbH0.T40n23f.5cXeJsywyMk8eQ/HoeYXxgm',
            'cpf' => '072.778.466-80',
            'status' => '1',
            'tbl_profiles_id' => '1',
        ]);
    }
}
