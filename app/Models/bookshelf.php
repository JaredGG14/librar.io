<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bookshelf extends Model
{
    use HasFactory;
    public function books(){
        return $this -> hasMany(book::class);
    }

    public function users(){
        return $this -> hasMany(User::class);
    }
}
