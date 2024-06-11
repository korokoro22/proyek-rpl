<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::all();

        return Inertia::render('AdminContent/ManajemenArtikel', [
            'artikel' => $artikel
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminForm/ArtikelAdmin');
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
            $validasiData['gambar'] = $request->file('gambar')->store('artikel', 'public');
            // $request->file('gambar')->storeAs('public/artikel', $request->file('gambar')->hashName());
        }

        Artikel::create($validasiData);

        return to_route('artikel.index');
    }

    public function edit($id)
    {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('AdminForm/EditArtikelAdmin', [
            'artikel' => $artikel
        ]);
    }

    public function update(Request $request, $id)
    {
        // $artikel = Artikel::findOrFail($id);
        // $rules = [
        //     'judul'=>'required',
        //     'tanggal'=>'required|date',
        //     'deskripsi'=>'required',
        // ];

        // $artikel = $request->validate($rules);

        // $validasiData = $request->validate([
        //     'judul' => 'required',
        //     'tanggal' => 'required|date',
        //     'deskripsi' => 'required',
        //     'gambar'
        // ]);
        // $artikel = Artikel::findOrFail($id);

        // if ($request->file('gambar')) {
        //     if ($artikel->gambar) {
        //         Storage::delete('artikel/' . $artikel->gambar);
        //     }

        //     $gambar = $request->file('gambar')->store('artikel', 'public');

        //     $artikel->update(['gambar' => $gambar]);
        // }
        // $gambar = $artikel['gambar'] ?? null;
        // if ($gambar) {
        //     if ($artikel->gambar) {
        //         Storage::disk('public')->delete($artikel->gambar);
        //     }
        //     $artikel['gambar'] = $gambar->store('project/' . $artikel->gambar, 'public');
        // }

        // // Artikel::where('id', $id)
        // //     ->update($artikel);
        // $artikel->update($request->except('gambar'));

        $request->validate([
            'judul' => 'required',
            'tanggal' => 'required',
            'deskripsi' => 'required',
            'gambar' => '',
        ]);

        $artikel = Artikel::findOrFail($id);

        $artikel->judul = $request->input('judul');
        $artikel->tanggal = $request->input('tanggal');
        $artikel->deskripsi = $request->input('deskripsi');

        if ($request->hasFile('gambar')) {
            //Delete old image from storage
            if ($artikel->gambar) {
                Storage::delete('public/artikel/' . $artikel->gambar);
            }

            // Upload new image
            $gambar = $request->file('gambar');
            $filename = time() . '.' . $gambar->getClientOriginalExtension();
            $gambar->storeAs('public/artikel', $filename);

            // $request['gambar'] = $request->file('gambar')->store('artikel', 'public');

            // $artikel->gambar = $request->input('gambar');
        }

        $artikel->save();
        return to_route('artikel.index');
    }

    public function destroy($id)
    {
        // $artikel = Artikel::findOrFail($id);

        // $gambar_path = public_path('storage/artikel/' . $artikel->gambar);

        // if (file_exists($gambar_path)) {
        //     unlink($gambar_path);
        // }

        // $artikel->delete();

        $artikel = Artikel::findOrFail($id);

        // Delete image from storage if it exists
        if ($artikel->gambar) {
            Storage::delete('artikel/' . basename($artikel->gambar));
        }

        $artikel->delete();

        // return redirect()->route('artikel.index')->with('success', 'Artikel deleted successfully!');


        return to_route('artikel.index');
    }
}
