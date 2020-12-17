<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Authorization;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/* Todas as rotas para a aplicação informativa, sem acesso ao sistema */
Route::get('/', [SiteController::class, 'index'])->name('/');

Route::get('sobre', [SiteController::class, 'sobre'])->name('sobre');

Route::get('midia', [SiteController::class, 'midia'])->name('midia');

Route::get('fale_conosco', [SiteController::class, 'fale_conosco'])->name('fale_conosco');
/* ---------- FIM ---------- */

/* Essa rotas serão redirecionadas para a HOME caso ele esteja logado */
Route::prefix('application')->middleware('guest')->group(function () {

    Route::get('login', [LoginController::class, 'index'])->name('login.index');

    Route::post('login', [LoginController::class, 'login'])->name('login.login');

    Route::get('login/recover', [LoginController::class, 'recover'])->name('login.recover');

    Route::post('login/recover', [LoginController::class, 'recover_do'])->name('login.recover)do');
});
/* ---------- FIM ---------- */

/* Essa rotas serão redirecionadas para o LOGIN caso ele não esteja logado ----- Aqui verificamos a permissão */
Route::prefix('application')->middleware('auth')->group(function () {

    Route::middleware('permission')->group(function () {

        Route::get('home', [HomeController::class, 'index'])->name('home.index');

        Route::get('home/detailed', [HomeController::class, 'detailed'])->name('home.detailed');

        Route::resource('profiles', ProfileController::class);

        Route::resource('profiles.permissions', PermissionController::class)->only(['index','create','store']);

        Route::resource('menus', MenuController::class);

        Route::resource('menus.items', ItemController::class)->shallow();
        
        Route::resource('users', UserController::class);
    });
    
    /* Rotas que são excessões de permissão */
    Route::get('home/change_password', [HomeController::class, 'change_password'])->name('home.change_password');

    Route::post('home/change_password', [HomeController::class, 'change_password_do'])->name('home.change_password_do');

    Route::get('home/access_denied', [HomeController::class, 'access_denied'])->name('home.access_denied');
    
    Route::get('login/logout', [LoginController::class, 'logout'])->name('login.logout');
    /* ---------- FIM ---------- */
});
/* ---------- FIM ---------- */