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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string("photo");
            $table->string("thumbnail");
            $table->string("author")->nullable();
            $table->string("title");
            $table->string("title_eng");
            $table->string("title_jpn");
            $table->string("slug");
            $table->string("slug_eng");
            $table->string("slug_jpn");
            $table->longText("body");
            $table->longText("body_eng");
            $table->longText("body_jpn");
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
        Schema::dropIfExists('articles');
    }
};
