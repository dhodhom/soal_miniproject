<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Barang;
use Illuminate\Support\Facades\Validator;

class BarangController extends Controller
{
    public function index()
    {
        $barang = Barang::all();

        return response()->json([
            "message" => "Successfully fetched item barang",
            "data" => $barang
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "kode" => "required|string",
            "nama" => "required|string",
            "kategori" => "required|string",
            "harga" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed creating new barang",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $createdBarang = Barang::create($validated);

        return response()->json([
            "message" => "Successfully creating new barang",
            "data" => $createdBarang
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "kode" => "required|string",
            "nama" => "required|string",
            "kategori" => "required|string",
            "harga" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed updated barang",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $barang = Barang::findOrFail($id);
        $barang->update($validated);

        return response()->json([
            "message" => "Successfully updated barang",
            "data" => $barang
        ]);
    }

    public function show(Request $request, $id)
    {
        $barang = Barang::findOrFail($id);
        return response()->json([
            "message" => "Successfully fetched barang",
            "data" => $barang
        ]);
    }

    public function destroy($id)
    {
        $barang = Barang::findOrFail($id);
        $barang->delete();
        return response()->json([
            "message" => "Successfully deleted barang",
            "data" => $barang
        ]);
    }
}
