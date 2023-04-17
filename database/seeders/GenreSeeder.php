<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('genres')->insert([
            'id' => '1',
            'description' => 'Horror',
        ]);
        DB::table('genres')->insert([
            'id' => '2',
            'description' => 'Fantasy',
        ]);
        DB::table('genres')->insert([
            'id' => '3',
            'description' => 'Sci-fi',
        ]);
        DB::table('genres')->insert([
            'id' => '4',
            'description' => 'Drama',
        ]);
        DB::table('genres')->insert([
            'id' => '5',
            'description' => 'Western',
        ]);
        DB::table('genres')->insert([
            'id' => '6',
            'description' => 'Suspense',
        ]);
        DB::table('genres')->insert([
            'id' => '7',
            'description' => 'Fiction',
        ]);
        DB::table('genres')->insert([
            'id' => '8',
            'description' => 'Classics',
        ]);
        DB::table('genres')->insert([
            'id' => '9',
            'description' => 'Adventure',
        ]);
        DB::table('genres')->insert([
            'id' => '10',
            'description' => 'Thriller',
        ]);
        DB::table('genres')->insert([
            'id' => '11',
            'description' => 'Mystery',
        ]);
        DB::table('genres')->insert([
            'id' => '12',
            'description' => 'Post Apocalyptic',
        ]);
        /*
        DB::table('genres')->insert([
            'id' => '13',
            'description' => '',
        ]);
        DB::table('genres')->insert([
            'id' => '',
            'description' => '',
        ]);
        */
    }
}
