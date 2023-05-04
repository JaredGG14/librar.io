<?php

namespace App\Http\Controllers;

use App\Models\status_user;
use Illuminate\Http\Request;

class StatusUserController extends Controller
{
    public function recent_activity($user_id){
        $status_user = status_user::where('user_id', $user_id)->latest()->take(9)->with(['book', 'status'])->get();
        return $status_user;
    }

    public function recent_reading($user_id){
        $status_user = status_user::where('user_id', $user_id)->where('status_id', 2)->latest()->take(5)->with('book')->get();
        return $status_user;
    }

    
}
