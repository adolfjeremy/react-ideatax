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
        Schema::table('departments', function (Blueprint $table) {
            $table->string("description")->nullable();
            $table->string("description_eng");
            $table->string("description_jpn")->nullable();
            $table->string("description_ch")->nullable();
            $table->string("image");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->dropColumn("description");
            $table->dropColumn("description_eng");
            $table->dropColumn("description_jpn");
            $table->dropColumn("description_ch");
            $table->dropColumn("image");
        });
    }
};
