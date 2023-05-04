<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PassportAuthController extends Controller
{
    public function register(Request $request){
        $this->validate($request, [
            "name" => "required",
            "last_name"=> "required",
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        $userdata = User::create([
            "name" => $request->name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "password" => bcrypt($request->password),
        ]);

        $token = $userdata->createToken("LaravelAuthApp")->accessToken;

        return response() -> json(["token" => $token, "user" => $userdata], 200);
    }

    public function login (Request $request){
        $userdata = [
            'email' => $request->email,
            'password'=> $request->password
        ];
        
        if(auth()->attempt($userdata))
        {            
            $token = auth() -> user() -> createToken("LaravelAuthApp")->accessToken;
            $userdata = auth() -> user();
            return response()->json(["token" => $token, "user" => $userdata], 200);
        } else{
            return response()->json(["error" => "Unathorized"], 401);
        }
    }
}
