<?php

namespace App\Http\Controllers;

use App\Http\Resources\DatauserCollection;
use App\Models\DataUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DataUserController extends Controller
{
    public function index()
    {
        $dataUser = new DatauserCollection(DataUser::OrderByDesc("id")->paginate(8));
        return Inertia::render("Homepage", [
            'title' => "Data User DPI",
            'description' => "Data User Daya Potensia Indonesia",
            'dataUser' => $dataUser
        ]);
    }

    public function create()
    {
        return inertia(''); //halaman create
    }
    
    
    public function store(Request $request)
    {
        $dataUser = new DataUser();
        $dataUser->nama = $request->nama;
        $dataUser->umur = $request->umur;
        $dataUser->jenis_kelamin = $request->jenis_kelamin;
        $dataUser->pekerjaan = $request->pekerjaan;
        $dataUser->alamat = $request->alamat;
        $dataUser->kontak = $request->kontak;
        $dataUser->waktu_temu = $request->waktu_temu;
        $dataUser->save();
        return redirect()->back()->with("message", 'data user berhasil dibuat');
    }

    public function show(DataUser $dataUser)
    {
        $data = $dataUser->get();
        return Inertia::render("Dashboard", [
            'dataUser' => $data,
        ]);
    }

    public function edit(DataUser $dataUser, Request $request)
    {
        return Inertia::render('EditData',[
            'dataUser'=> $dataUser->find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        $updateDataUser = DataUser::where( 'id', $request->id )->update([
            'nama' => $request->nama,
            'umur' => $request->umur,
            'jenis_kelamin' => $request->jenis_kelamin,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'kontak' => $request->kontak,
            'waktu_temu' => $request->waktu_temu
        ]);
        return to_route('dashboard-user')->with("message", 'Update Data User Berhasil'); 
    }

    public function destroy(Request $request)
    {
        $kegiatan = DataUser::find($request->id);
        $kegiatan->delete();
        return redirect()->back()->with("message", 'berita berhasil dihapus');
    }
}
