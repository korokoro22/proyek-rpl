import React from "react";

const Hero2 = () => {
    return (
        <div  className="flex bg-[#E2E2E2] relative w-full font-inter  md:flex-row flex-col md:justify-center md:pt-32 pt-4 md:h-[35em] xl:gap-48 lg:gap-20 md:gap-12">
            <div className="flex md:block flex-col justify-center items-center gap-2">
                <h1 className="text-center text-2xl font-bold text-black bg-[#F3D457] md:px-2 py-1 lg:w-[2.5em] w-[3em]  rounded-lg md:text-start">
                    Visi
                </h1>
                <p className="lg:text-lg  md:text-sm md:pt-4 font-medium text-center md:text-start w-[26em] md:w-fit">
                    Menjadi perusahaan penyedia layanan <br /> psikologi yang
                    profesional dan terkemuka, <br /> khususnya di kawasan timur
                    Indonesia.
                </p>
            </div>
            
            <div className="flex flex-col md:block items-center pt-6 md:pt-0">
                <h1 className="text-center text-2xl font-bold text-black bg-[#F3D457] md:px-2 py-1 lg:w-[3em] w-[3em] rounded-lg md:text-start">
                    {" "}
                    Misi
                </h1>
                <ul className="lg:w-[30em] md:w-[25em] w-[15em]  list-disc md:pt-4 text-justify md:text-sm text-lg">
                    <li>
                        Menyediakan pelayanan psikologi yang profesional sesuai
                        dengan kode etik Himpunan Psikologi Indonesia
                    </li>
                    <li>
                        Memberikan pelayanan psikologi di bidang industri dan
                        organisasi, sesuai dengan kebutuhan perusahaan
                    </li>
                    <li>
                        Memberikan pelayanan psikologi klinis yang berkaitan
                        dengan masalah individu, pasangan, kelauarga, dan
                        kelompok
                    </li>
                    <li>
                        Memberikan pelayanan dan pendampingan di bidang
                        psikologi forensik
                    </li>
                    <li>Memberikan pelayanan psikologi di bidang pendidikan</li>
                    <li>
                        Melakukan pengabdian sosial dalam rangka promotif,
                        preventif, dan kuratif
                    </li>
                    <li>
                        Memberikan pelatihan dalam rangka pengembangan dan
                        peningkatan kompetensi diri
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hero2;
