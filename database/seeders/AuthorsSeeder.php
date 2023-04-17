<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('authors')->insert([
            'name' => 'Stephen',
            'last_name' => 'King',
            'birthdate' => 'September 21st, 1947',
            'birthplace' => 'Portlane, Maine',
        ]);
        DB::table('authors')->insert([
            'name' => 'Neil',
            'last_name' => 'Gaiman',
            'birthdate' => 'November 10th, 1960',
            'birthplace' => 'Portchester, UK',
        ]);
        DB::table('authors')->insert([
            'name' => 'J.R.R',
            'last_name' => 'Tolkien',
            'birthdate' => 'January 3rd, 1892',
            'deathday' => 'September 2nd, 1973',
            'birthplace' => 'Bloemfontein, Sudáfrica',
        ]);
        DB::table('authors')->insert([
            'name' => 'Ernest',
            'last_name' => 'Hemingway',
            'birthdate' => 'July 21st, 1899',
            'deathday' => 'July 2nd, 1961',
            'birthplace' => 'Oak Park, Illinois',
        ]);
        DB::table('authors')->insert([
            'name' => 'John',
            'last_name' => 'Steinbeck',
            'birthdate' => 'February 27th, 1902',
            'deathday' => 'December 20th, 1968',
            'birthplace' => 'Salinas, California',
        ]);
    }
}
