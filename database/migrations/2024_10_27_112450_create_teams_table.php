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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('position');
            $table->string('linkedin')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('profile_picture');
            $table->string('photo');
            $table->longText('biography');
            $table->longText('biography_eng');
            $table->longText('biography_jpn');
            $table->longText('area_of_expertise');
            $table->longText('area_of_expertise_eng');
            $table->longText('area_of_expertise_jpn');
            $table->string('SEO_title');
            $table->string('SEO_title_eng');
            $table->string('SEO_title_jpn');
            $table->longText('description');
            $table->longText('description_eng');
            $table->longText('description_jpn');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
