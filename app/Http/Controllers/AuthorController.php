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
}
