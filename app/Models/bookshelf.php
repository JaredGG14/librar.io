<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bookshelf extends Model
{

    
    use HasFactory;
    public function book(){
        return $this -> belongsTo(book::class);
    }

    public function users(){
        return $this -> hasMany(User::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
