<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMenusItemsTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_menus_items', function (Blueprint $table) {
            $table->id();
            $table->string('name',45);
            $table->string('icon',45);
            $table->string('status',10);
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            $table->unsignedBigInteger('tbl_menus_id');
            $table->unsignedBigInteger('tbl_methods_id')->unique();

            $table->foreign('tbl_menus_id')->references('id')->on('tbl_menus')->onDelete('cascade');
            $table->foreign('tbl_methods_id')->references('id')->on('tbl_methods')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_menus_items');
    }
}
