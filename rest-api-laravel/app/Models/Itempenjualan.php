<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itempenjualan extends Model
{
    protected $table = 'itempenjualan';

    use HasFactory;

    protected $guarded = [
        "id",
        "created_at",
        "updated_at"
    ];
}
