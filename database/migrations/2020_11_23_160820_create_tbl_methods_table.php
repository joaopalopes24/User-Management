<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMethodsTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_methods', function (Blueprint $table) {
            $table->id();
            $table->string('class',45);
            $table->string('method',45);
            $table->string('route',45);
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_methods');
    }
}
