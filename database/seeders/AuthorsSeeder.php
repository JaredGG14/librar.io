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
            'id' => '1',
            'name' => 'Stephen',
            'last_name' => 'King',
        ]);
        DB::table('authors')->insert([
            'id' => '2',
            'name' => 'Neil',
            'last_name' => 'Gaiman',
        ]);
        DB::table('authors')->insert([
            'id' => '3',
            'name' => 'J.R.R',
            'last_name' => 'Tolkien',
        ]);
        DB::table('authors')->insert([
            'id' => '4',
            'name' => 'Ernest',
            'last_name' => 'Hemingway',
        ]);
        DB::table('authors')->insert([
            'id' => '5',
            'name' => 'John',
            'last_name' => 'Steinbeck',
        ]);
    }
}
