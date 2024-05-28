import { Link } from "@inertiajs/react";
import React from "react";
const BiodataForm = () => {
    return (
        <div className="flex w-full justify-center items-center py-10 font-inter">
            <div className="lg:w-[55em] md:h-[48em] md:w-[45em] h-[45em] w-[21em] bg-[#E9E9E9] m-auto rounded-lg">
                <form action="" className="">
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Form Biodata
                        </h1>
                        <div className="mt-5">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Usia
                            </label>
                            <input
                                type="number"
                                placeholder="Usia"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>
                        <div className="gender">
                            <h2 htmlFor="" className="pl-1 font-bold text-lg">
                                Gender
                            </h2>
                            <div className="pt-2 flex gap-5">
                                <div className="pl-1 flex items-center">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        checked
                                    />
                                    <label
                                        htmlFor="male"
                                        className="font-semibold text-base pl-2"
                                    >
                                        Laki-laki
                                    </label>
                                </div>
                                <div className="pl-1 flex items-center">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        checked
                                    />
                                    <label
                                        htmlFor="female"
                                        className="font-semibold text-base pl-2"
                                    >
                                        Perempuan
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                NIK
                            </label>
                            <input
                                type="text"
                                placeholder="Nomor Induk Kependudukan"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Pekerjaan
                            </label>
                            <input
                                type="text"
                                placeholder="Pekerjaan"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Alamat
                            </label>
                            <input
                                type="text"
                                placeholder="Alamat"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>
                        <Link href="">
                            <button className="btn bg-[#F3D457] hover:bg-[#F3D457] mt-2  text-white text-lg w-full">
                                Submit
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BiodataForm;
