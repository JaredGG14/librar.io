<?php

namespace App\Http\Controllers;

use App\Models\status_user;
use Illuminate\Http\Request;

class StatusUserController extends Controller
{
    public function index($user_id){
        $bookshelf = status_user::where('user_id', $user_id)
        ->with('status')
        ->get();

        return $bookshelf;
    }
}
