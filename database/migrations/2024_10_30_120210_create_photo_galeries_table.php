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
        Schema::create('photo_galeries', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string("title_eng");
            $table->string("title_jpn");
            $table->string("image");
            $table->integer("width")->default(1600);
            $table->integer("height")->default(1200);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photo_galeries');
    }
};
