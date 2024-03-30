<?php

namespace App\Http\Controllers;

use App\Http\Resources\KegiatanCollection;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    public function index()
    {
        $kegiatan = new KegiatanCollection(Kegiatan::OrderByDesc("id")->paginate(8));
        return Inertia::render("Homepage", [
            'title' => "Kegiatan DPI",
            'description' => "Kegiatan Daya Potensia Indonesia",
            'kegiatan' => $kegiatan
        ]);
    }

    public function create()
    {
        return inertia(''); //halaman create
    }
    
    
    public function store(Request $request)
    {
        $kegiatan = new Kegiatan();
        $kegiatan->judul = $request->judul;
        $kegiatan->deskripsi = $request->deskripsi;
        $kegiatan->kategori = $request->kategori;
        $kegiatan->author = auth()->user()->email;
        $kegiatan->save();
        return redirect()->back()->with("message", 'kegiatan berhasil dibuat');
    }

    public function show(Kegiatan $kegiatan)
    {
        $kegiatandpi = $kegiatan::where('author', auth()->user()->email)->get();
        return Inertia::render("Dashboard", [
            'kegiatandpi' => $kegiatandpi,
        ]);
    }

    public function edit(Kegiatan $kegiatan, Request $request)
    {
        return Inertia::render('EditKegiatan',[
            'kegiatandpi'=> $kegiatan->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        $updateKegiatan = Kegiatan::where( 'id', $request->id )->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori' => $request->kategori,
        ]);
        return to_route('dashboard-kegiatan')->with("message", 'Update Kegiatan Berhasil'); 
    }

    public function destroy(Request $request)
    {
        $kegiatan = Kegiatan::find($request->id);
        $kegiatan->delete();
        return redirect()->back()->with("message", 'berita berhasil dihapus');
    }
}
