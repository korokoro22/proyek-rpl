<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    public function index()
    {
        $kegiatan = Kegiatan::all();

        return Inertia::render('AdminContent/ManajemenKegiatan', [
            'kegiatan' => $kegiatan
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminForm/KegiatanAdmin');
    }

    public function store(Request $request)
    {
        $validasiData = $request->validate([
            'judul' => 'required',
            'tanggal' => 'required|date',
            'deskripsi' => 'required',
            'gambar'
        ]);

        if ($request->file('gambar')) {
            $validasiData['gambar'] = $request->file('gambar')->store('kegiatan', 'public');
        }

        Kegiatan::create($validasiData);

        return to_route('kegiatan.index');
    }

    public function edit($id)
    {
        $kegiatan = Kegiatan::findOrFail($id);

        return Inertia::render('AdminForm/EditKegiatanAdmin', [
            'kegiatan' => $kegiatan
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'judul' => 'required',
            'tanggal' => 'required',
            'deskripsi' => 'required',
            'gambar'
        ]);

        $kegiatan = Kegiatan::findOrFail($id);

        $kegiatan->judul = $request->input('judul');
        $kegiatan->tanggal = $request->input('tanggal');
        $kegiatan->deskripsi = $request->input('deskripsi');

        if ($request->hasFile('gambar')) {
            if ($kegiatan->gambar) {
                Storage::delete('public/kegiatan/' . $kegiatan->gambar);
            }

            // Upload new image
            $gambar = $request->file('gambar');
            $filename = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->storeAs('public/kegiatan', $filename);
        }

        $kegiatan->save();
        return to_route('kegiatan.index');
    }
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

    public function destroy($id)
    {
        // $artikel = Artikel::findOrFail($id);

        // $gambar_path = public_path('storage/artikel/' . $artikel->gambar);

        // if (file_exists($gambar_path)) {
        //     unlink($gambar_path);
        // }

        // $artikel->delete();

        $kegiatan = Kegiatan::findOrFail($id);

        // Delete image from storage if it exists
        if ($kegiatan->gambar) {
            Storage::delete('kegiatan/' . basename($kegiatan->gambar));
        }

        $kegiatan->delete();

        // return redirect()->route('kegiatan.index')->with('success', 'Artikel deleted successfully!');


        return to_route('kegiatan.index');
    }
}
