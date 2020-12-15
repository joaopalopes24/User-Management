<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblOrdersTable extends Migration
{
    public function up()
    {
        Schema::create('tbl_orders', function (Blueprint $table) {
            $table->id();
            $table->string('reference',45);
            $table->string('description');
            $table->integer('30')->nullable();
            $table->integer('31')->nullable();
            $table->integer('32')->nullable();
            $table->integer('33')->nullable();
            $table->integer('34')->nullable();
            $table->integer('35')->nullable();
            $table->integer('36')->nullable();
            $table->integer('37')->nullable();
            $table->integer('38')->nullable();
            $table->integer('39')->nullable();
            $table->integer('40')->nullable();
            $table->integer('41')->nullable();
            $table->integer('42')->nullable();
            $table->integer('43')->nullable();
            $table->integer('44')->nullable();
            $table->integer('45')->nullable();
            $table->integer('46')->nullable();
            $table->bigInteger('pairs');
            $table->integer('unit_price');
            $table->bigInteger('total_price');
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            $table->unsignedBigInteger('tbl_requests_id');

            $table->foreign('tbl_requests_id')->references('id')->on('tbl_requests');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tbl_orders');
    }
}
