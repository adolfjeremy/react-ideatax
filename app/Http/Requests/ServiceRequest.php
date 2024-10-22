<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'image' => 'image',
            'title' => 'string|required',
            'title_eng' => 'string|required',
            'title_jpn' => 'string|required',
            'slug' => 'string|required',
            'slug_eng' => 'string|required',
            'slug_jpn' => 'string|required',
            'description' => "required",
            'description_eng' => "required",
            'description_jpn' => "required",
            'SEO_title' => 'string|required',
            'SEO_title_eng' => 'string|required',
            'SEO_title_jpn' => 'string|required',
            'meta_description' => 'string|required',
            'meta_description_eng' => 'string|required',
            'meta_description_jpn' => 'string|required',
        ];
    }
}
