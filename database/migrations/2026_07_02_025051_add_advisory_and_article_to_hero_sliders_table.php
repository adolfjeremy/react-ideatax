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
        Schema::table('hero_sliders', function (Blueprint $table) {
            $table->unsignedBigInteger('advisory_id')->nullable();
            $table->unsignedBigInteger('article_id')->nullable();
            
            $table->foreign('advisory_id')->references('id')->on('advisories')->onDelete('set null');
            $table->foreign('article_id')->references('id')->on('articles')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hero_sliders', function (Blueprint $table) {
            $table->dropForeign(['advisory_id']);
            $table->dropForeign(['article_id']);
            $table->dropColumn(['advisory_id', 'article_id']);
        });
    }
};
