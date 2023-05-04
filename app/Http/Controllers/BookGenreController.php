<?php

namespace App\Http\Controllers;

use App\Models\book_genre;
use Illuminate\Http\Request;

class BookGenreController extends Controller
{
    public function index(){
        $bookgenre = book_genre::all();
        return $bookgenre;
    }

    public function store(Request $request){
        $bookgenre = new book_genre();
$bookgenre -> book_id = $request -> book_id;    
        $bookgenre -> genre_id = $request -> genre_id;
        $bookgenre -> save();

        return $bookgenre;
    }

    public function update(Request $request){
        $bookgenre = book_genre::find($request -> id);
        $bookgenre -> book_id = $request -> book_id;    
        $bookgenre -> genre_id = $request -> genre_id;    
        $bookgenre -> save();

        return $bookgenre;
    }

    public function destroy(Request $request){
        $bookgenre = book_genre::destroy($request -> id);
    }
}
