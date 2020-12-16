<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblCustomersTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('street',45);
            $table->integer('number');
            $table->string('complement',45);
            $table->string('neighborhood',45);
            $table->string('city',45);
            $table->string('UF',45);
            $table->string('CEP',45);
            $table->string('cpf/cnpj',45)->unique();
            $table->string('email');
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            $table->unsignedBigInteger('tbl_users_id')->nullable();

            $table->foreign('tbl_users_id')->references('id')->on('tbl_users')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_customers');
    }
}
