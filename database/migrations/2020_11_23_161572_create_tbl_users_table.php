<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblUsersTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('number',15);
            $table->string('password');
            $table->string('cpf',14)->unique();
            $table->string('birth',10);
            $table->string('status',10);
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            //$table->timestamp('email_verified_at')->nullable();
            //$table->rememberToken();
            $table->unsignedBigInteger('tbl_profiles_id')->nullable();

            $table->foreign('tbl_profiles_id')->references('id')->on('tbl_profiles')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_users');
    }
}
