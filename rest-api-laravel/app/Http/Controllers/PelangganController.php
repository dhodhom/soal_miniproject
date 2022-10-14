<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Pelanggan;
use Illuminate\Support\Facades\Validator;

class PelangganController extends Controller
{
    public function index()
    {
        $pelanggan = Pelanggan::all();

        return response()->json([
            "message" => "Successfully fetched pelanggan",
            "data" => $pelanggan
        ], Response::HTTP_OK);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id_pelanggan" => "required|string",
            "nama" => "required|string",
            "domisili" => "required|string",
            "jenis_kelamin" => "required|string"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed creating new pelanggan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $createdPelanggan = Pelanggan::create($validated);

        return response()->json([
            "message" => "Successfully creating new pelanggan",
            "data" => $createdPelanggan
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "id_pelanggan" => "required|string",
            "nama" => "required|string",
            "domisili" => "required|string",
            "jenis_kelamin" => "required|string"
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                "message" => "Failed updated pelanggan",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();

        $pelanggan = Pelanggan::findOrFail($id);
        $pelanggan->update($validated);

        return response()->json([
            "message" => "Successfully updated pelanggan",
            "data" => $pelanggan
        ]);
    }

    public function show(Request $request, $id)
    {
        $pelanggan = Pelanggan::findOrFail($id);
        return response()->json([
            "message" => "Successfully fetched pelanggan",
            "data" => $pelanggan
        ]);
    }

    public function destroy($id)
    {
        $pelanggan = Pelanggan::findOrFail($id);
        $pelanggan->delete();
        return response()->json([
            "message" => "Successfully deleted item pelanggan",
            "data" => $pelanggan
        ]);
    }
}
