<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(){
        $books = book::all();
        return $books;
    }
    public function book_id($id){
        $book_id = book::where('id', $id) -> with('author') -> first();
        return $book_id;
    }



}
