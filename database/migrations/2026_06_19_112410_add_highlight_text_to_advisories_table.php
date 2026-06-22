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
        Schema::table('advisories', function (Blueprint $table) {
            $table->longText('highlight')->nullable();
            $table->longText('highlight_eng')->required();
            $table->longText('highlight_jpn')->nullable();
            $table->string('SEO_title')->nullable();
            $table->string('SEO_title_eng')->required();
            $table->string('SEO_title_jpn')->nullable();
            $table->longText('meta_description')->nullable();
            $table->longText('meta_description_eng')->required();
            $table->longText('meta_description_jpn')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('advisories', function (Blueprint $table) {
            $table->dropColumn('highlight');
            $table->dropColumn('highlight_eng');
            $table->dropColumn('highlight_jpn');
        });
    }
};
