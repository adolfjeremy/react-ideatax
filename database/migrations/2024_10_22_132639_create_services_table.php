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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string("image");
            $table->string("title");
            $table->string("title_eng");
            $table->string("title_jpn");
            $table->string("slug");
            $table->string("slug_eng");
            $table->string("slug_jpn");
            $table->longText("description");
            $table->longText("description_eng");
            $table->longText("description_jpn");
            $table->string("SEO_title");
            $table->string("SEO_title_eng");
            $table->string("SEO_title_jpn");
            $table->longText("meta_description");
            $table->longText("meta_description_eng");
            $table->longText("meta_description_jpn");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
