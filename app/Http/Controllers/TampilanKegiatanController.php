<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TampilanKegiatanController extends Controller
{
    public function index()
    {
        $kegiatan = Kegiatan::all();
        $newestKegiatans = Kegiatan::latest()->take(3)->get();
        return Inertia::render('Kegiatan', [
            'kegiatan' => $kegiatan,
            'newestKegiatans' => $newestKegiatans
        ]);
    }

    public function show($id)
    {
        $kegiatan = Kegiatan::findOrFail($id);

        return Inertia::render('KegiatanContent', [
            'kegiatans' => $kegiatan
        ]);
    }
}
