import React from "react";
import Sosial from "../../../../assets/Layanan/sosial.jpg";
const ContentArtikel = ({ artikel }) => {
    return (
        <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[21em] m-auto flex flex-col py-10 gap-y-10 font-inter">
            <h1 className="text-center font-bold md:text-4xl text-2xl">
                {artikel.judul}
            </h1>
            <div className="w-fit m-auto">
                <img
                    src={`/storage/${artikel.gambar}`}
                    alt=""
                    className="w-[60em] object-cover rounded-xl"
                />
                <div className="flex font-semibold text-base mt-2 gap-2 ">
                    <p className="border-r-[3px] border-black h-[1.4em] pr-2">
                        {artikel.tanggal}
                    </p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify lg:w-[60em] md:w-[45em] m-auto">
                {artikel.deskripsi}
            </p>
        </div>
    );
};

export default ContentArtikel;
