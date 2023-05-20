<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookshelfSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currentYear = date('Y');

        DB::table('bookshelves')->insert([
            'book_id' => '1',
            'user_id' => '1',
            'status_id' => '1', //Read
            'started_at' => $currentYear,
            'score' => '4.5',
            'review' => 'so good',
            'finished_at' => $currentYear
        ]);
        DB::table('bookshelves')->insert([
            'book_id' => '2',
            'user_id' => '1',
            'status_id' => '2'
        ]);
    }
}
