import React from "react";
import Industri from "../../../assets/Layanan/industri.jpg";

const KegiatanCard = () => {
    return (
        <div className="m-auto rounded-lg shadow-2xl w-[20em] h-[28em] font-inter text-black">
            <img src={Industri} alt="" className="rounded-t-lg" />
            <p className=" pl-2 pt-2">20 Februari 2020</p>
            <h1 className="mt-4 ml-2 font-bold text-lg">
                Ngaji Bareng Pak Ustadz{" "}
            </h1>
            <p className="ml-2 h-[6.5em] mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                numquam, ipsum officia suscipit esse doloribus repellendus
                obcaecati dignissimos eius distinctio.
            </p>
        </div>
    );
};

export default KegiatanCard;
