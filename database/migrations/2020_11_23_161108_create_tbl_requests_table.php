<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_requests', function (Blueprint $table) {
            $table->id();
            $table->string('contact_person');
            $table->string('contact_number');
            $table->string('payment_form');
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at');
            $table->unsignedBigInteger('tbl_users_id')->nullable();
            $table->unsignedBigInteger('tbl_customers_id');

            $table->foreign('tbl_users_id')->references('id')->on('tbl_users')->onDelete('set null');
            $table->foreign('tbl_customers_id')->references('id')->on('tbl_customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_requests');
    }
}
