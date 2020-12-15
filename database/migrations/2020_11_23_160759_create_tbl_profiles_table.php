<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblProfilesTable extends Migration
{
        public function up()
    {
        Schema::create('tbl_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('status',10);
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_profiles');
    }
}
