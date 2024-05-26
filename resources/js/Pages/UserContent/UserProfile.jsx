import UserLayout from "@/Components/Layout/UserLayout";
import React from "react";

const UserProfile = () => {
    return (
        <UserLayout>
            <div className="md:w-[30em] w-[21em] m-auto bg-white p-5 rounded-lg flex flex-col justify-center">
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">
                        Nama Lengkap
                    </h1>
                    <h1 className= "w-full">Muhammmad Adil Nusabakti </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">Usia</h1>
                    <h1 className=" w-full ">22 Tahun </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">
                        Jenis Kelamin
                    </h1>
                    <h1 className=" w-full ">Laki-Laki </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">Pekerjaan</h1>
                    <h1 className=" w-full ">Full-Stack and AI Developer </h1>
                </div>
                <div className="border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center justify-center">
                    <h1 className="text-lg font-semibold w-full">Alamat</h1>
                    <h1 className=" w-full ">
                        Jalan Raya Pendidikan Blok G1 No 9{" "}
                    </h1>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserProfile;
