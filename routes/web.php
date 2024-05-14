<?php

use App\Http\Controllers\DataUserController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function(){
    return Inertia::render("Homepage");
});
Route::get('/layanan', function(){
    return Inertia::render("LayananKami");
});
Route::get('/layanan-content', function(){
    return Inertia::render("LayananContent");
});
Route::get('/industri', function(){
    return Inertia::render("Layanan/Industri");
});
Route::get('/klinis', function(){
    return Inertia::render("Layanan/Klinis");
});
Route::get('/forensik', function(){
    return Inertia::render("Layanan/Forensik");
});
Route::get('/pendidikan', function(){
    return Inertia::render("Layanan/Pendidikan");
});
Route::get('/sosial', function(){
    return Inertia::render("Layanan/Sosial");
});
Route::get('/lainnya', function(){
    return Inertia::render("Layanan/Lainnya");
});

Route::get('/kegiatan-berita', function(){
    return Inertia::render("Kegiatan");
});
Route::get('/kegiatan-content', function(){
    return Inertia::render("KegiatanContent");
});
Route::get('/login-dpi', function(){
    return Inertia::render("Login");
});
Route::get('/register-dpi', function(){
    return Inertia::render("Register");
});
Route::get('/user-dashboard', function(){
    return Inertia::render("UserDashboard");
});


// Route::get('/', [NewsController::class, 'index']);
Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');
Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.news');
Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.news');


// kegiatan
// Route::get('/', [KegiatanController::class. 'index']);
Route::post('/kegiatan', [KegiatanController::class, 'store'])->middleware(['auth', 'verified'])->name('create.kegiatan');
Route::get('/kegiatan', [KegiatanController::class, 'show'])->middleware(['auth', 'verified'])->name('my.kegiatan');
Route::get('/kegiatan/edit', [KegiatanController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.kegiatan');
Route::post('/kegiatan/update', [KegiatanController::class, 'update'])->middleware(['auth', 'verified'])->name('update.kegiatan');
Route::post('/kegiatan/delete', [KegiatanController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.kegiatan');

// data user
// Route::get('/', [DataUserController::class. 'index']);
Route::post('/data-user', [DataUserController::class, 'store'])->middleware(['auth', 'verified'])->name('create.data-user');
Route::get('/data-user', [DataUserController::class, 'show'])->middleware(['auth', 'verified'])->name('my.data-user');
Route::get('/data-user/edit', [DataUserController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.data-user');
Route::post('/data-user/update', [DataUserController::class, 'update'])->middleware(['auth', 'verified'])->name('update.data-user');
Route::post('/data-user/delete', [DataUserController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.data-user');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
