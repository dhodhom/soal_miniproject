<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $table = 'barang';

    use HasFactory;

    protected $guarded = [
        "id",
        "created_at",
        "updated_at"
    ];
}
