<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Models\ArticleCategory;
use Illuminate\Support\Facades\Storage;

class AdminArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::latest()->get();
        return Inertia::render('Admin/Article/Article', [
            "articles" => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = ArticleCategory::all();
        return Inertia::render('Admin/Article/ArticleCreate', [
            "categories" => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");

        if($request->file('photo'))
        {
            $data['photo'] = $request->file('photo')->store('article');
        }
        if($request->file('thumbnail'))
        {
            $data['thumbnail'] = $request->file('thumbnail')->store('article');
        }         

        Article::create($data);

        return redirect()->route('articles.index')->with([
            'message' => "Article created successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Article::findOrFail($id);
        $categories = ArticleCategory::all();
        return Inertia::render('Admin/Article/ArticleEdit', [
            "item" => $item,
            "categories" => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, $id)
    {
        $data = $request->all();
        $item = Article::findOrFail($id);

        $data['slug'] = Str::slug($request->title);
        $data['slug_eng'] = Str::slug($request->title_eng);
        $data['slug_jpn'] = Str::slug($request->title_jpn, language:"ja-JP");

        if($request->file('photo'))
        {
            Storage::delete($request->oldPhoto);
            $data['photo'] = $request->file('photo')->store('article');
        }
        if($request->file('thumbnail'))
        {
            Storage::delete($request->oldThumbnail);
            $data['thumbnail'] = $request->file('thumbnail')->store('article');
        }         

        $item->update($data);

        return redirect()->route('articles.index')->with([
            'message' => "Article Updated successfully",
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Article::findOrFail($id);
        Storage::delete($item->photo);
        Storage::delete($item->thumbnail);
        $item->delete();

        return redirect()->route('articles.index')->with([
            'message' => "Article deleted successfully",
            'type' => 'success'
        ]);;
    }
}
