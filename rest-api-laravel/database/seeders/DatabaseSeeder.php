<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelanggan;
use App\Models\Barang;
use App\Models\Penjualan;
use App\Models\Itempenjualan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        /*
        Pelanggan::create([
            'id_pelanggan' => 'PELANGGAN_',
            'nama' => '',
            'domisili' => '',
            'jenis_kelamin' => ''
        ]);

        Barang::create([
            'kode' => 'BRG_',
            'nama' => '',
            'kategori' => '',
            'harga' => 0
        ]);

        Penjualan::create([
            'id_nota' => 'NOTA_',
            'tgl' => '',
            'kode_pelanggan' => 'PELANGGAN_',
            'subtotal' => 0
        ]);

        Itempenjualan::create([
            'nota' => 'NOTA_',
            'kode_barang' => 'BRG_',
            'qty' => 0
        ]);
        */
    }
}
