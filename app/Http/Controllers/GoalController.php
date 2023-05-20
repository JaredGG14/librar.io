<?php

namespace App\Http\Controllers;

use App\Models\bookshelf;
use App\Models\goal;
use App\Models\status_user;
use Illuminate\Http\Request;

class GoalController extends Controller
{
    public function setGoal(Request $request)
    {
        $goal = new goal;
        $goal->user_id = $request->user_id;
        $currentYear = date('Y');
        //Modificar el updated at si no funciona y agregar un campo de fecha de finalizado y modificar controller
        $totalBooks = bookshelf::where('user_id', $request->user_id)->whereYear('finished_at', $currentYear)->count();
        if ($totalBooks !== 0) {
            $goal->current_books = $totalBooks;
        } else {
            $goal->current_books = 0;
        }
        $goal->book_goal = $request->book_goal;
        $goal->year = $currentYear;
        $goal->save();
        return $goal;
    }


    public function user_goal($user)
    {
        $user_goal = goal::where('user_id', $user)->get();
        return $user_goal;
    }

    public function checking_goal($user)
    {
        $user_goal = goal::where('user_id', $user)->get();
        $currentBooks = $user_goal->pluck('current_books');
        $bookGoal = $user_goal->pluck('book_goal');


        if ($user_goal -> isEmpty()) {
            $goal_status = "New";
            return $goal_status;
        } else {
            if ($currentBooks  >= $bookGoal) {
                $goal_status = "Finished";
                return $goal_status;
            } elseif ($currentBooks < $bookGoal) {
                $goal_status = "On going";
                return $goal_status;
            }
        }
    }

    public function update_goal($user)
    {
        $currentYear = date('Y');
        //Modificar el updated at si no funciona y agregar un campo de fecha de finalizado y modificar controller
        $totalBooks = status_user::where('user_id', $user)->where('status_id', 1)->whereYear('updated_at', $currentYear)->count();
        $goal = goal::where('user_id', $user)->get();
        $goal->current_books = $totalBooks;
        $goal->save();
    }
}
