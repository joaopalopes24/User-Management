<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblPermissionsTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_permissions', function (Blueprint $table) {
            $table->id();
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            $table->unsignedBigInteger('tbl_profiles_id');
            $table->unsignedBigInteger('tbl_methods_id');

            $table->foreign('tbl_profiles_id')->references('id')->on('tbl_profiles')->onDelete('cascade');
            $table->foreign('tbl_methods_id')->references('id')->on('tbl_methods')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_permissions');
    }
}
