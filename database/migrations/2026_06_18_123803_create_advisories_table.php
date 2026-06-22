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
        Schema::create('advisories', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('title_eng');
            $table->string('title_jpn')->nullable();
            $table->string('slug')->nullable();
            $table->string('slug_eng');
            $table->string('slug_jpn')->nullable();
            $table->longText('body')->nullable();
            $table->longText('body_eng');
            $table->longText('body_jpn')->nullable();
            $table->foreignId('team_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advisories');        
    }
};
