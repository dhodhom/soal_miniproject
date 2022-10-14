<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\PenjualanController;
use App\Http\Controllers\ItempenjualanController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("/pelanggan", [PelangganController::class, "index"]);
Route::get("/barang", [BarangController::class, "index"]);
Route::get("/penjualan", [PenjualanController::class, "index"]);
Route::get("/itempenjualan", [ItempenjualanController::class, "index"]);

Route::post("/pelanggan", [PelangganController::class, "store"]);
Route::post("/barang", [BarangController::class, "store"]);
Route::post("/penjualan", [PenjualanController::class, "store"]);
Route::post("/itempenjualan", [ItempenjualanController::class, "store"]);

Route::put("/pelanggan/{id}", [PelangganController::class, "update"]);
Route::put("/barang/{id}", [BarangController::class, "update"]);
Route::put("/penjualan/{id}", [PenjualanController::class, "update"]);
Route::put("/itempenjualan/{id}", [ItempenjualanController::class, "update"]);

Route::get("/pelanggan/{id}", [PelangganController::class, "show"]);
Route::get("/barang/{id}", [BarangController::class, "show"]);
Route::get("/penjualan/{id}", [PenjualanController::class, "show"]);
Route::get("/itempenjualan/{id}", [ItempenjualanController::class, "show"]);

Route::delete("/pelanggan/{id}", [PelangganController::class, "destroy"]);
Route::delete("/barang/{id}", [BarangController::class, "destroy"]);
Route::delete("/penjualan/{id}", [PenjualanController::class, "destroy"]);
Route::delete("/itempenjualan/{id}", [ItempenjualanController::class, "destroy"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
