<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Itempenjualan;
use Illuminate\Support\Facades\Validator;

class ItempenjualanController extends Controller
{
    public function index()
    {
        $itempenjualan = Itempenjualan::all();

        return response()->json([
            "message" => "Successfully fetched item penjualan",
            "data" => $itempenjualan
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nota" => "required|string",
            "kode_barang" => "required|string",
            "qty" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed creating new item penjualan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $createdItemPenjualan = Itempenjualan::create($validated);

        return response()->json([
            "message" => "Successfully creating new item penjualan",
            "data" => $createdItemPenjualan
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "nota" => "required|string",
            "kode_barang" => "required|string",
            "qty" => "required|numeric"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed updated item penjualan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $itempenjualan = Itempenjualan::findOrFail($id);
        $itempenjualan->update($validated);

        return response()->json([
            "message" => "Successfully updated item penjualan",
            "data" => $itempenjualan
        ]);
    }

    public function show(Request $request, $id)
    {
        $itempenjualan = Itempenjualan::findOrFail($id);
        return response()->json([
            "message" => "Successfully fetched item penjualan",
            "data" => $itempenjualan
        ]);
    }

    public function destroy($id)
    {
        $itempenjualan = Itempenjualan::findOrFail($id);
        $itempenjualan->delete();
        return response()->json([
            "message" => "Successfully deleted item penjualan",
            "data" => $itempenjualan
        ]);
    }
}
