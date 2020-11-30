<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;

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
//Auth::routes();

Route::get('/', [SiteController::class, 'index'])->name('/');

Route::get('sobre', [SiteController::class, 'sobre'])->name('sobre');

Route::get('midia', [SiteController::class, 'midia'])->name('midia');

Route::get('fale_conosco', [SiteController::class, 'fale_conosco'])->name('fale_conosco');

Route::get('application/login', [LoginController::class, 'index'])->name('login.index');

Route::get('application/login/logout', [LoginController::class, 'logout'])->name('login.logout');

Route::post('application/login', [LoginController::class, 'login'])->name('login.login');

Route::get('application/login/recover', [LoginController::class, 'recover'])->name('login.recover');

Route::get('application/home', [HomeController::class, 'index'])->name('home.index');

Route::resources([
    'application/users' => UsersController::class,
    'application/pedidos' => RequestsController::class,
    'application/users' => CustomersController::class
]);