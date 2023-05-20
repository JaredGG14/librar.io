<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($user_email)
    {
        $user = User::where('email', $user_email)->get();
        return $user;
    }

    public function user_profile($user_id){
        $user_profile = User::select('nickname', 'age', 'description', 'photo')->where('id', $user_id)->get();
        return $user_profile;
    }

    public function update(Request $request, User $user)
    {
        $user = User::where('email', $request -> email);
        $user -> name = $request -> name;
        $user -> last_name = $request -> last_name;
        $user -> nickname = $request -> nickname;
        $user -> age = $request -> age;
        $user -> description = $request -> description;
        $user -> photo = $request -> name;
        $user -> save();

        return $user;
    }

    public function update_pwd(Request $request){
        $this->validate($request, [
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        $user = User::where('email', $request -> email);
        $user -> password = $request -> password;
        $user -> save();
    }

    public function destroy(Request $request)
    {
        $user = User::destroy($request -> id);
    }
    
}
