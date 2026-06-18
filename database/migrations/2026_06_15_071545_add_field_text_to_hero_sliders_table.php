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
            $table->text('title')->nullable();
            $table->text('title_eng')->nullable();
            $table->text('title_jpn')->nullable();
            $table->text('title_ch')->nullable();
            $table->text('subtitle')->nullable();
            $table->text('subtitle_eng')->nullable();
            $table->text('subtitle_jpn')->nullable();
            $table->text('subtitle_ch')->nullable();
            $table->text('button_text')->nullable();
            $table->text('button_text_eng')->nullable();
            $table->text('button_text_jpn')->nullable();
            $table->text('button_text_ch')->nullable();
            $table->text('button_link')->nullable();
            $table->text('button_link_eng')->nullable();
            $table->text('button_link_jpn')->nullable();
            $table->text('button_link_ch')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hero_sliders', function (Blueprint $table) {
            $table->dropColumn(['text', 'text_eng', 'text_jpn', 'text_ch']);
        });
    }
};
