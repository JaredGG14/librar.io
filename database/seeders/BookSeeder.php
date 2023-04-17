<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            'title' => 'IT',
            'author_id' => '1', //Author = Stephen King
            'avg_score' => '4.25',
            'synopsis' => '
            It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ...
            They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.
            ',
            'photo' => 'https://m.media-amazon.com/images/I/41nngxCNKxL.jpg', //328x500
            'physical_link' => 'https://www.amazon.com.mx/Eso-Stephen-King/dp/6073181388/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LXT6NNJDQQ4N&keywords=eso&qid=1681172223&sprefix=e%2Caps%2C453&sr=8-1',
            'digital_link' => 'https://www.amazon.com.mx/Stephen-King-ebook/dp/B00C239M5C/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=275TPXV7VW7PC&keywords=it&qid=1681172265&s=books&sprefix=it%2Cstripbooks%2C157&sr=1-3',
        ]);

        DB::table('books')->insert([
            'title' => 'The Stand',
            'author_id' => '1', //Author = Stephen King
            'avg_score' => '4.34',
            'synopsis' => "
            First came the days of the plague. Then came the dreams. Dark dreams that warned of the coming of the dark man. The apostate of death, his worn-down boot heels tramping the night roads. The warlord of the charnel house and Prince of Evil. His time is at hand. His empire grows in the west and the Apocalypse looms.
            For hundreds of thousands of fans who read The Stand in its original version and wanted more, this new edition is Stephen King's gift. And those who are listening to The Stand for the first time will discover a triumphant and eerily plausible work of the imagination that takes on the issues that will determine our survival.",
            'photo' => 'https://upload.wikimedia.org/wikipedia/en/9/96/The_Stand_cover.jpg',

            'physical_link' => 'https://www.amazon.com.mx/Apocalipsis-Stand-Stephen-King/dp/8497599411/ref=tmm_mmp_swatch_0?_encoding=UTF8&qid=1681407239&sr=8-3',
            'digital_link' => 'https://www.amazon.com.mx/Apocalipsis-Stephen-King-ebook/dp/B074CM34L6/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=280ZIWUXMTA2H&keywords=apocalipsis&qid=1681407239&sprefix=apocalipsis%2Caps%2C215&sr=8-3',
        ]);

        DB::table('books')->insert([
            'title' => 'The Shining',
            'author_id' => '1', //Author = Stephen King
            'avg_score' => '4.26',
            'synopsis' => "
            Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.
            ",
            'photo' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg',
            'physical_link' => 'https://www.amazon.com.mx/El-resplandor-Stephen-King/dp/6073118392/ref=sr_1_1?keywords=el+resplandor+stephen+king&qid=1681173487&sprefix=El+respl%2Caps%2C343&sr=8-1',
            'digital_link' => 'https://www.amazon.com.mx/El-resplandor-Stephen-King-ebook/dp/B007TID0R6/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1681172605&sr=1-1',
        ]);
        
        DB::table('books')->insert([
            'title' => 'Lord of the Rings: The Fellowship of the Ring',
            'author_id' => '2', //Author =
            'avg_score' => '4.38',
            'synopsis' => '',
            'photo' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => 'Lord of the Rings: The Two Towers',
            'author_id' => '2', //Author =
            'avg_score' => '4.47',
            'synopsis' => '',
            'photo' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216149i/61215372.jpg',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => 'Lord of the Rings: The Return of the King',
            'author_id' => '2', //Author = J.R.R. Tolkien
            'avg_score' => '4.55',
            'synopsis' => '',
            'photo' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216226i/61215384.jpg',
            'physical_link' => '',
            'digital_link' => '',
        ]);
        /*
        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);

        DB::table('books')->insert([
            'title' => '',
            'author_id' => '', //Author =
            'avg_score' => '',
            'synopsis' => '',
            'photo' => '',
            'physical_link' => '',
            'digital_link' => '',
        ]);
        */
    }
}
