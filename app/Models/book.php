<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class book extends Model
{
    use HasFactory;

    public function author(){
        return $this -> belongsTo(author::class);
    }

    public function bookshelf(){
        return $this -> hasMany(bookshelf::class);
    }

    public function genre(){
        return $this -> belongsTo(genre::class);
    }

    public function status(){
        return $this -> belongsTo(status_user::class);
    }
}
