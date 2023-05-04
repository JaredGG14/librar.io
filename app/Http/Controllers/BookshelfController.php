<?php

namespace App\Http\Controllers;

use App\Models\bookshelf;
use App\Models\status_user;
use Illuminate\Http\Request;

class BookshelfController extends Controller
{
    public function index($user){
        $bookshelf = bookshelf::select('score', 'review', 'finished_at')
        ->where('user_id', $user)
        ->with('book: photo, title')
        ->with('book.author: name, last_name');

        return $bookshelf;
    }

    public function latest_reviews(){
        $bookshelf = bookshelf::select('score', 'review', 'finished_at')
        ->latest()
        ->with('user: photo, nickname')
        ->with('book: photo, title, synopsis')
        ->with('book.author: name, lastname')
        ->take(30)
        ->get();
        return $bookshelf;
    }

    public function reviews_section($book_id){
        $bookshelf = bookshelf::select('score', 'review', 'finished_at')->where('book_id', $book_id)->with('user:photo, nickname')->take(30)->get();
        return $bookshelf;
    }

    public function favorite_books($user_id){
        $status_user = bookshelf::where('user_id', $user_id)->where('score', '>=', 4)->latest()->with('book')->get();
        return $status_user;
    }

    public function book_read($user_id){
        $book_read = status_user::select('book_id')->where('user_id', $user_id)->where('status_id', 1)->get();
        $bookshelf_update = bookshelf::where('user_id', $user_id)->where('book_id', $book_read)->get();
        $currentYear = date('Y');
        $bookshelf_update->finished_at = $currentYear;
        $bookshelf_update -> save();
    }

    public function getReadBooksByYear($user_id){
        $currentYear = date('Y');
        $books_read = bookshelf::where('user_id', $user_id)->where('finished_at', $currentYear)->get();
        return $books_read();
    }
}
