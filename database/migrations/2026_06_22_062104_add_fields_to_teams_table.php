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
        Schema::table('teams', function (Blueprint $table) {
            $table->longText("capabilities")->nullable();
            $table->longText("capabilities_eng");
            $table->longText("capabilities_jpn")->nullable();
            $table->longText("capabilities_ch")->nullable();
            $table->longText("credentials")->nullable();
            $table->longText("credentials_eng");
            $table->longText("credentials_jpn")->nullable();
            $table->longText("credentials_ch")->nullable();
            $table->longText("education")->nullable();
            $table->longText("education_eng");
            $table->longText("education_jpn")->nullable();
            $table->longText("education_ch")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->dropColumn([
                'capabilities',
                'capabilities_eng',
                'capabilities_jpn',
                'capabilities_ch',
                'credentials',
                'credentials_eng',
                'credentials_jpn',
                'credentials_ch',
                'education',
                'education_eng',
                'education_jpn',
                'education_ch',
            ]);
        });
    }
};
