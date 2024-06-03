import React from "react";
import ArtikelCard from "./ArtikelCard";
import { Link } from "@inertiajs/react";

const ArtikelContainer = ({ cobas }) => {
    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                {cobas
                    .filter((cob) => cob.id <= 6)
                    .map((coba) => (
                        <ArtikelCard key={coba.id} {...coba} />
                    ))}
            </div>
            <div className="text-center ">
                <Link >
                    <button className="bg-[#24A0ED] text-white my-5 px-2 py-[0.5em] rounded-xl text-base font-semibold ">
                        Berita Lainnya
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ArtikelContainer;
