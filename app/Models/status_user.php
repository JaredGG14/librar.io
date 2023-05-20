<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class status_user extends Model
{
    use HasFactory;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function users(){
        return $this -> hasMany(User::class);
    }

    public function book(){
        return $this -> hasMany(book::class);
    }
}
