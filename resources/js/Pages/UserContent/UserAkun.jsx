import UserLayout from "@/Components/Layout/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const UserAkun = () => {
    return (
        <UserLayout>
            <div className="md:w-[30em] w-[21em] m-auto bg-white p-5 rounded-lg flex flex-col justify-center">
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">Nama Depan</h1>
                    <h1 className=" w-full ">Muhammmad </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">
                        Nama Belakang
                    </h1>
                    <h1 className=" w-full ">Adil </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">
                        Email
                    </h1>
                    <h1 className=" w-full ">adil.nusabakti117@gmail.com </h1>
                </div>
            </div>
            <div className="md:text-end text-center">
                <Link href="/edit-akun">
                    <button className="bg-[#24A0ED] text-white px-2 py-[0.5em] mt-2 rounded-xl text-sm font-semibold">
                        Edit Akun
                    </button>
                </Link>
            </div>
        </UserLayout>
    );
};

export default UserAkun;
