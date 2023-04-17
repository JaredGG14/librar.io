<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookGenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('book_genres')->insert([
            'book_id' => '1',
            'genre_id' => '1', //Horror
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '1',
            'genre_id' => '7', //Fiction
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '1',
            'genre_id' => '10', //Thriller
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '1',
            'genre_id' => '11', //Mystery
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '2',
            'genre_id' => '1',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '2',
            'genre_id' => '7',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '2',
            'genre_id' => '10',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '2',
            'genre_id' => '11',
        ]);
        
        DB::table('book_genres')->insert([
            'book_id' => '3',
            'genre_id' => '1',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '3',
            'genre_id' => '7',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '3',
            'genre_id' => '3', //Sci-Fi
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '3',
            'genre_id' => '12', //Post Apocalyptic
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '4',
            'genre_id' => '2',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '4',
            'genre_id' => '7',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '4',
            'genre_id' => '8',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '4',
            'genre_id' => '9',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '5',
            'genre_id' => '2',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '5',
            'genre_id' => '7',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '5',
            'genre_id' => '8',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '5',
            'genre_id' => '9',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '6',
            'genre_id' => '2',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '6',
            'genre_id' => '7',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '6',
            'genre_id' => '8',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '6',
            'genre_id' => '9',
        ]);
        /*
        DB::table('book_genres')->insert([
            'book_id' => '',
            'genre_id' => '',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '',
            'genre_id' => '',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '',
            'genre_id' => '',
        ]);

        DB::table('book_genres')->insert([
            'book_id' => '',
            'genre_id' => '',
        ]);
        */
    }
}
