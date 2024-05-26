import LayananCard from "@/Components/Homepage/LayananHome/LayananCard";
import React from "react";
import KegiatanCard from "./KegiatanCard";

const KegiatanContainer = () => {
    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                {[0,1,2,3,4,5,6,7,8].map((_, index) => (
                    <KegiatanCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default KegiatanContainer;
