import { Link } from "@inertiajs/react";
import React from "react";

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
                            placeholder="Nama"
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
                        <Link href="/login-dpi" className="">
                            <button className="btn bg-[#F3D457] hover:bg-[#F3D457] text-white text-lg w-full">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
