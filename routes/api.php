<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use PharIo\Manifest\Author;

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
//Auth
Route::post('/register', [PassportAuthController::class, 'register']);
Route::post('/login', [PassportAuthController::class, 'login']);

//Author routes
Route::get('/authors', [AuthorController::class, 'index']);

//Book routes
Route::get('/books', [BookController::class, 'index']);
Route::get('/book_id/{id}', [BookController::class, 'book_id']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 
