<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\author;

class AuthorController extends Controller
{
    public function index()
    {
        $author = author::all();
        return $author;
    }

    public function store(Request $request)
    {
        $author = new author();
        $author -> name = $request -> name;
        $author -> last_name = $request -> last_name;
        $author->save();
        
        return $author;
    }

    public function update(Request $request)
    {
        $author = author::find($request->id);
        $author -> name = $request -> name;
        $author -> last_name = $request -> last_name;
        $author->save();
        
        return $author;
    }

    public function destroy(Request $request)
    {
        $author = author::destroy($request -> id);
    }
}
