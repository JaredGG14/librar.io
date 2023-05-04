<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookshelfController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\StatusUserController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//Auth Routes
Route::post('/register', [PassportAuthController::class, 'register']);
Route::post('/login', [PassportAuthController::class, 'login']);

//User Routes
Route::get('/user/{user_email}', [UserController::class, 'index']);
Route::get('/user_profile/{user_id}', [UserController::class, 'user_profile']);
Route::post('/update_user', [UserController::class, 'update']);
Route::post('/change_passwd', [UserController::class, 'update_pwd']);
Route::post('/user_delete', [UserController::class, 'destroy']);

//Status_User Routes
Route::get('/recent_reading/{user_id}', [StatusUserController::class, 'recent_reading']);
Route::get('/recent_activity/{user_id}', [StatusUserController::class, 'recent_activity']);

//Book routes
Route::get('/books', [BookController::class, 'index']);
Route::get('/book_id/{id}', [BookController::class, 'book_id']);

//Author routes 
Route::get('/authors', [AuthorController::class, 'index']);

//Bookshelf routes
Route::get('/bookshelf/{user_id}', [BookshelfController::class, 'index']);
Route::get('/latest_reviews', [BookshelfController::class, 'latest_reviews']);
Route::get('/reviews_section/{book_id}', [BookshelfController::class, 'reviews_section']);






Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 
