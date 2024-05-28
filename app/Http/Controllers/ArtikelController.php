<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

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



        // Artikel::create($validasiData);

        // return to_route('AdminContent/ManajemenArtikel');

        // Artikel::create($request->validate([
        //     'judul'=>'required',
        //     'tanggal'=>'required|date',
        //     'deskripsi'=>'required',
        //     'author',
        //     'gambar'
        // ]));

        // return Inertia::render('AdminForm/ArtikelAdmin');
    }

    public function edit($id) {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('', [
            'artikel' => $artikel
        ]);
    }

    public function update(Request $request, $id){
        $artikel = Artikel::findOrFail($id);
        $rules = [
            'judul'=>'required',
            'tanggal'=>'required|date',
            'deskripsi'=>'required',
            'author'=>'required',
            'gambar'
        ];
        
        $artikel = $request->validate($rules);

        Artikel::where('id', $id)
            ->update($artikel);

            return redirect()->route('');
    }

    public function destroy($id) {
        $artikel = Artikel::findOrFail($id);
        $artikel->delete();

        return redirect()->route('');
    }
}


