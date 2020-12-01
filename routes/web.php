<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\HomeController;

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

Route::get('/', [SiteController::class, 'index'])->name('/');

Route::get('sobre', [SiteController::class, 'sobre'])->name('sobre');

Route::get('midia', [SiteController::class, 'midia'])->name('midia');

Route::get('fale_conosco', [SiteController::class, 'fale_conosco'])->name('fale_conosco');

Route::prefix('application')->group(function () {

    Route::get('login', [LoginController::class, 'index'])->middleware('guest')->name('login.index');

    Route::post('login', [LoginController::class, 'login'])->name('login.login');

    Route::get('home', [HomeController::class, 'index'])->middleware('auth')->name('home.index');

    Route::resource('usuarios', UsersController::class);
    Route::resource('pedidos', RequestsController::class);
    Route::resource('clientes', CustomersController::class);

    Route::get('login/logout', [LoginController::class, 'logout'])->middleware('auth')->name('login.logout');

    Route::get('login/recover', [LoginController::class, 'recover'])->middleware('guest')->name('login.recover');

});