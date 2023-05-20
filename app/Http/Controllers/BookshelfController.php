<?php

namespace App\Http\Controllers;

use App\Models\bookshelf;
use App\Models\status_user;
use Illuminate\Http\Request;

class BookshelfController extends Controller
{
    //shows teh bookshelf selecting only the score, review and finished at columns, because we need to get the info of the foreign keys
    //So we don't need the user_id nor book_id.
    public function index($user_id){
        $bookshelf = bookshelf::where('user_id', $user_id)
        ->with('book')
        ->with('book.author')
        ->with('book.genre')
        ->with('status')
        ->get();

        return $bookshelf;
    }

    //Global reviews of the books, this method will get all records of the reviews of every user. (Part of the mainscreen)
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

    //Reviews from the book that we are looking
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
        return $books_read;
    }

    public function store(Request $request){
        $bookshelf = new bookshelf();
        $bookshelf -> book_id = $request -> book_id;
        $bookshelf -> user_id = $request -> user_id;
        $bookshelf -> score = $request -> score;
        $bookshelf -> review = $request -> review;
        $bookshelf -> finished_at = $request -> finished_at;
        $bookshelf -> save();

        return $bookshelf;
    }

    public function destroy(Request $request) {
        $bookshelf = bookshelf::destroy($request -> id);
    }

}
