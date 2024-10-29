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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string("title_eng")->nullable();
            $table->string("title_jpn")->nullable();
            $table->string('slug')->nullable();
            $table->string("slug_eng")->nullable();
            $table->string("slug_jpn")->nullable();
            $table->longText('jobdesc')->nullable();
            $table->longText('jobdesc_eng')->nullable();
            $table->longText("jobdesc_jpn")->nullable();
            $table->longText('qualification')->nullable();
            $table->longText('qualification_eng')->nullable();
            $table->longText("qualification_jpn")->nullable();
            $table->longText("skill_jpn")->nullable();
            $table->longText('skill')->nullable();
            $table->longText('skill_eng')->nullable();
            $table->string('SEO_title')->nullable();
            $table->string('SEO_title_eng')->nullable();
            $table->string("SEO_title_jpn")->nullable();
            $table->longText('description')->nullable();
            $table->longText('description_eng')->nullable();
            $table->longText("description_jpn")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
