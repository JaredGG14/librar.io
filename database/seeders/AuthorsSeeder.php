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
        ]);
        DB::table('authors')->insert([
            'name' => 'Neil',
            'last_name' => 'Gaiman',
        ]);
        DB::table('authors')->insert([
            'name' => 'Neil',
            'last_name' => 'Gaiman',
        ]);
        DB::table('authors')->insert([
            'name' => 'J.R.R',
            'last_name' => 'Tolkien',
        ]);
        DB::table('authors')->insert([
            'name' => 'J.R.R',
            'last_name' => 'Tolkien',
        ]);
        DB::table('authors')->insert([
            'name' => 'Ernest',
            'last_name' => 'Hemingway',
        ]);
        DB::table('authors')->insert([
            'name' => 'John',
            'last_name' => 'Steinbeck',
        ]);
    }
}
