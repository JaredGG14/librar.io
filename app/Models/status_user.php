<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class status_user extends Model
{
    use HasFactory;

    public function statuses(){
        return $this -> hasMany(status::class);
    }
}
