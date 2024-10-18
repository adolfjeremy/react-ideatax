<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Article/Article');
    }
    public function detail()
    {
        return Inertia::render('Article/Detail/ArticleDetail');
    }
}
