import { Link } from '@inertiajs/react'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className="flex w-full justify-center items-center pt-10 font-inter">
            <div className="md:w-[30em] md:h-[33em] h-[31em]  w-[21em] bg-[#E9E9E9] align-middle m-auto rounded-xl">
                <form action="" className="">
                    <div className="md:w-[27em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-5">
                        <h1 className="md:text-4xl text-3xl font-bold ">
                            Buat Akun
                        </h1>
                        <input
                            type="text"
                            placeholder="Nama Depan"
                            className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-5"
                        />
                        <input
                            type="text"
                            placeholder="Nama Belakang"
                            className="input input-bordered md:h-[3.5em] border-[#D1D1D1] w-full"
                        />
                        <input
                            type="text"
                            placeholder="Alamat Email"
                            className="input input-bordered md:h-[3.5em] border-[#D1D1D1] w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered md:h-[3.5em] border-[#D1D1D1] w-full"
                        />
                        <p className="text-right text-sm">
                            Tidak Punya akun?{" "}
                            <Link
                                href="/register-dpi"
                                className="text-[#24A0ED]"
                            >
                                Buat Akun
                            </Link>
                        </p>
                        <button className="btn bg-[#F3D457] hover:bg-[#F3D457]">
                            Button
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default RegisterForm