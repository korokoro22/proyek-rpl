<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    public function index() {
        $kegiatan = Kegiatan::all();

        return Inertia::render('AdminContent/ManajemenKegiatan', [
            'kegiatan' => $kegiatan
        ]);
    }

    public function create() {
        return Inertia::render('AdminForm/KegiatanAdmin');
    }

    // public function store(Request $request) {
    //     $validasiData = $request->validate([
    //         'judul'=>'required',
    //         'tanggal'=>'required|date',
    //         'deskripsi'=>'required',
    //         'author',
    //         'gambar'
    //     ]);

    //     Kegiatan::create($validasiData);

    //     // Kegiatan::create($validasiData);

    //     // return to_route('AdminContent/Manajemenkegiatan');

    //     // Kegiatan::create($request->validate([
    //     //     'judul'=>'required',
    //     //     'tanggal'=>'required|date',
    //     //     'deskripsi'=>'required',
    //     //     'author',
    //     //     'gambar'
    //     // ]));

    //     // return Inertia::render('AdminForm/kegiatanAdmin');
    // }

    // public function edit($id) {
    //     $kegiatan = Kegiatan::findOrFail($id);

    //     return Inertia::render('AdminForm/EditKegiatanAdmin', [
    //         'kegiatan' => $kegiatan
    //     ]);
    // }

    // public function update(Request $request, $id){
    //     $kegiatan = Kegiatan::findOrFail($id);
    //     $rules = [
    //         'judul'=>'required',
    //         'tanggal'=>'required|date',
    //         'deskripsi'=>'required',
    //     ];
        
    //     $kegiatan = $request->validate($rules);

    //     Kegiatan::where('id', $id)
    //         ->update($kegiatan);

    //         return redirect()->route('kegiatan.index');
    // }

    // public function destroy($id) {
    //     $kegiatan = Kegiatan::findOrFail($id);
    //     $kegiatan->delete();

    //     return redirect()->route('kegiatan.index');
    // }
}
