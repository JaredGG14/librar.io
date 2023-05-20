<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index($orderby)
    {
        if ($orderby === 'asc') {
            $books = Book::join('authors', 'books.author_id', '=', 'authors.id')
                ->orderBy('books.title', 'asc')
                ->select('books.*', 'authors.name as author_name', 'authors.last_name as author_lastname')
                ->get();
        } else if ($orderby === 'desc') {
            $books = Book::join('authors', 'books.author_id', '=', 'authors.id')
                ->orderBy('books.title', 'desc')
                ->select('books.*', 'authors.name as author_name', 'authors.last_name as author_lastname')
                ->get();
        } else {
            $books = Book::join('authors', 'books.author_id', '=', 'authors.id')
                ->select('books.*', 'authors.name as author_name', 'authors.last_name as author_lastname')
                ->get();
        }
        return $books;
    }

    public function store(Request $request)
    {
        $book = new book();
        $book->title = $request->title;
        $book->author_id = $request->author_id;
        $book->genre_id = $request->genre_id;
        $book->avg_score = $request->avg_score;
        $book->synopsis = $request->synopsis;
        $book->photo = $request->photo;
        $book->physical_link = $request->physical_link;
        $book->digital_link = $request->digital_link;
        $book->save();

        return $book;
    }

    public function update(Request $request)
    {
        $book = book::find($request->id);
        $book->title = $request->title;
        $book->author_id = $request->author_id;
        $book->genre_id = $request->genre_id;
        $book->avg_score = $request->avg_score;
        $book->synopsis = $request->synopsis;
        $book->photo = $request->photo;
        $book->physical_link = $request->physical_link;
        $book->digital_link = $request->digital_link;
        $book->save();

        return $book;
    }

    public function destroy(Request $request)
    {
        $book = book::destroy($request->id);
    }

    public function book_id($id)
    {
        $book_id = book::where('id', $id)->with('author')->get();
        return $book_id;
    }

    public function book_author($author)
    {
        $book_author = book::where('author_id', $author)->with('author')->with('genre')->get();
        return $book_author;
    }


    public function mostRated()
    {
        $mostRated = Book::where('avg_score', '>=', 4)
            ->with('author')
            ->with('genre')
            ->take(5)
            ->get();

        return $mostRated;
    }

    public function lastBookAdded()
    {
        $lastBookAdded = book::orderBy('created_at', 'desc')->with('author')->take(5)->get();
        return $lastBookAdded;
    }
}
