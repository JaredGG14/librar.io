<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;
use Laravel\Ui\Presets\React;

class BookController extends Controller
{
    public function index(){
        $books = book::all();
        return $books;
    }

    public function store(Request $request){
        $book = new book();
        $book -> title = $request -> title;
        $book -> author_id = $request -> author_id;
        $book -> avg_score = $request -> avg_score;
        $book -> synopsis = $request -> synopsis;
        $book -> photo = $request -> photo;
        $book -> physical_link = $request -> physical_link;
        $book -> digital_link = $request -> digital_link;
        $book -> save();

        return $book;
    }

    public function update(Request $request){
        $book = book::find($request -> id);
        $book -> title = $request -> title;
        $book -> author_id = $request -> author_id;
        $book -> avg_score = $request -> avg_score;
        $book -> synopsis = $request -> synopsis;
        $book -> photo = $request -> photo;
        $book -> physical_link = $request -> physical_link;
        $book -> digital_link = $request -> digital_link;
        $book -> save();

        return $book;
    }

    public function destroy(Request $request){
        $book = book::destroy($request -> id);
    }

    public function book_id($id){
        $book_id = book::where('id', $id) -> with('author') -> first();
        return $book_id;
    }
}
