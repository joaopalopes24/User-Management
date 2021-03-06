<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblPasswordResetsTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_password_resets', function (Blueprint $table) {
            $table->string('email')->index();
            $table->string('token');
            $table->dateTime('created_at')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_password_resets');
    }
}
