<?php

namespace App\Http\Controllers;

use App\Models\DataPengguna;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class DataPenggunaController extends Controller
{
    public function index() {
        $data_pengguna = DataPengguna::all();

        return Inertia::render('', [      //halaman data pengguna
            'dataPengguna' => $data_pengguna
        ]);
    }

    public function create() {
        return Inertia::render(''); //halaman create data pengguna 
    }

    public function store(Request $request) {
        $validasiData = $request->validate([
            'nama' => 'required',
            'usia' => 'required',
            'jenis_kelamin' => 'required',
            'pekerjaan' => 'required',
            'pekerjaan' => 'required',
            'alamat' => 'required'
        ]);

        DataPengguna::create($validasiData);

        return redirect()->route(''); //
    }

    public function edit($id) {
        $data_pengguna_edit = DataPengguna::findOrFail($id);
    }
}
