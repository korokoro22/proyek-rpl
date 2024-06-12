<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Iluminate\Support\Facades\Session;
use Inertia\Inertia;

class LoginAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        return Inertia::render('LoginAdmin');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email'     => 'required|email',
            'password'  => 'required'
        ]);

        //get email and password from request
        $credentials = $request->only('email', 'password');

        //attempt to login
        if (Auth::guard('admin')->attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();

            //redirect route dashboard
            return to_route('kegiatan.index');
        }

        
    }

    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
