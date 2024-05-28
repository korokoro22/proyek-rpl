<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_pengguna', function (Blueprint $table) {
            
            // $table->string('nik')->primary();
            // $table->increments('id');
            $table->id();
            $table->string('nama');
            $table->string('usia');
            $table->string('jenis_kelamin');
            $table->string('pekerjaan');
            $table->string('alamat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_pengguna');
    }
};
