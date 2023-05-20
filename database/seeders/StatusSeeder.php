<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statuses')->insert([
            'id' => '1',
            'description' => 'Read'
        ]);

        DB::table('statuses')->insert([
            'id' => '2',
            'description' => 'TBR'
        ]);

        DB::table('statuses')->insert([
            'id' => '3',
            'description' => 'Ongoing'
        ]);
    }
}
