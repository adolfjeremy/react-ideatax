<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HeroRequest extends FormRequest
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
            'hero' => [
                'nullable',
                'file',
                'mimes:jpg,jpeg,png,webp',
                'max:5120'
            ],
            'title' => 'nullable|string',
            'title_eng' => 'nullable|string',
            'title_jpn' => 'nullable|string',
            'title_ch' => 'nullable|string',
            'subtitle' => 'nullable|string',
            'subtitle_eng' => 'nullable|string',
            'subtitle_jpn' => 'nullable|string',
            'subtitle_ch' => 'nullable|string',
            'button_text' => 'nullable|string',
            'button_text_eng' => 'nullable|string',
            'button_text_jpn' => 'nullable|string',
            'button_text_ch' => 'nullable|string',
            'button_link' => 'nullable|string',
            'button_link_eng' => 'nullable|string',
            'button_link_jpn' => 'nullable|string',
            'button_link_ch' => 'nullable|string',
        ];
    }
}
