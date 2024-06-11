<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TampilanArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::all();
        $newestArtikels = Artikel::latest()->take(3)->get();
        return Inertia::render('Artikel', [
            'artikel' => $artikel,
            'newestArtikels' => $newestArtikels
        ]);
    }

    public function show($id)
    {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('ArtikelContent', [
            'artikels' => $artikel,

        ]);
    }
}
