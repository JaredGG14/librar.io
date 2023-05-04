<?php

namespace App\Http\Controllers;

use App\Models\genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index(){
        $genre = genre::all();
        return $genre;
    }

    public function store(Request $request){
        $genre = new genre();
        $genre -> description = $request -> description;    
        $genre -> save();

        return $genre;
    }

    public function update(Request $request){
        $genre = genre::find($request -> id);
        $genre -> description = $request -> description;    
        $genre -> save();

        return $genre;
    }

    public function destroy(Request $request){
        $genre = genre::destroy($request -> id);
    }
}
