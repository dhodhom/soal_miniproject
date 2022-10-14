<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Penjualan;
use Illuminate\Support\Facades\Validator;

class PenjualanController extends Controller
{
    public function index()
    {
        $penjualan = Penjualan::all();

        return response()->json([
            "message" => "Successfully fetched penjualan",
            "data" => $penjualan
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id_nota" => "required|string",
            "tgl" => "required|string",
            "kode_pelanggan" => "required|string",
            "subtotal" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed creating new penjualan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $createdPenjualan = Penjualan::create($validated);

        return response()->json([
            "message" => "Successfully creating new penjualan",
            "data" => $createdPenjualan
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "id_nota" => "required|string",
            "tgl" => "required|string",
            "kode_pelanggan" => "required|string",
            "subtotal" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed updated penjualan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $penjualan = Penjualan::findOrFail($id);
        $penjualan->update($validated);

        return response()->json([
            "message" => "Successfully updated penjualan",
            "data" => $penjualan
        ]);
    }

    public function show(Request $request, $id)
    {
        $penjualan = Penjualan::findOrFail($id);
        return response()->json([
            "message" => "Successfully fetched penjualan",
            "data" => $penjualan
        ]);
    }

    public function destroy($id)
    {
        $penjualan = Penjualan::findOrFail($id);
        $penjualan->delete();
        return response()->json([
            "message" => "Successfully deleted item penjualan",
            "data" => $penjualan
        ]);
    }
}
