<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ArtikelController extends Controller
{
    public function index() {
        $artikel = Artikel::all();

        return Inertia::render('AdminContent/ManajemenArtikel', [
            'artikel' => $artikel
        ]);
    }

    public function create() {
        return Inertia::render('AdminForm/ArtikelAdmin');
    }

    public function store(Request $request) {
        $validasiData = $request->validate([
            'judul'=>'required',
            'tanggal'=>'required|date',
            'deskripsi'=>'required',
            'author',
            'gambar'
        ]);

        if($request->file('gambar')) {
            $validasiData['gambar'] = $request->file('gambar')->store('artikel', 'public');
            // $request->file('gambar')->storeAs('public/artikel', $request->file('gambar')->hashName());
        }

        Artikel::create($validasiData);

        // Artikel::create($validasiData);

        // return to_route('AdminContent/ManajemenArtikel');

        // Artikel::create($request->validate([
        //     'judul'=>'required',
        //     'tanggal'=>'required|date',
        //     'deskripsi'=>'required',
        //     'author',
        //     'gambar'
        // ]));

        return to_route('artikel.index');
    }

    public function edit($id) {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('AdminForm/EditArtikelAdmin', [
            'artikel' => $artikel
        ]);
    }

    public function update(Request $request, $id){
        // $artikel = Artikel::findOrFail($id);
        // $rules = [
        //     'judul'=>'required',
        //     'tanggal'=>'required|date',
        //     'deskripsi'=>'required',
        // ];
        
        // $artikel = $request->validate($rules);

        $validasiData = $request->validate([
            'judul'=>'required',
            'tanggal'=>'required|date',
            'deskripsi'=>'required',
            'author',
            'gambar'
        ]);

        $artikel = Artikel::findOrFail($id);

        if($request->file('gambar')){
            if($artikel->gambar) {
                Storage::delete('artikel/'.$artikel->gambar);
            }

            $gambar = $request->file('gambar')->store('artikel', 'public');

            $artikel->update(['gambar' => $gambar]);
        }

        // Artikel::where('id', $id)
        //     ->update($artikel);
        $artikel->update($request->except('gambar'));

        return to_route('artikel.index');
    }

    public function destroy($id) {
        $artikel = Artikel::findOrFail($id);
        $artikel->delete();

        return to_route('artikel.index');
    }
}


