import React from 'react'
import Industri from '../../../assets/Layanan/industri.jpg'
import Forensik from '../../../assets/Layanan/forensik.jpg'
import Sosial from '../../../assets/Layanan/sosial.jpg'

const ArtikelHeadline = () => {
  return (
    <div className="bg-[#E9E9E9] font-inter">
            <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-5 static xl:w-[70em] lg:w-[60em] md:w-[45em] m-auto">
                <div
                    className=" bg-cover bg-center xl:w-[30em] md:w-[20em] md:h-[30em] h-[14em] w-[20em] text-white bg-black rounded-xl"
                    style={{
                        backgroundImage: `url('${Industri}')`,
                    }}
                >
                    <div className=" text-white pl-2 mt-[9.5em] md:mt-[26em] ">
                        <p className=" text-lg"> 20 Februari 2020 </p>
                        <h1 className="xl:text-2xl lg:text-base font-bold">
                            Ayo Bangun Dunia Di Dalam Perbedaan
                        </h1>
                    </div>
                </div>

                <div className=" w-[20em] md:w-[25em] lg:w-[40em] h-[30em]">
                    <div
                        className=" bg-cover h-[14em] text-white bg-black rounded-xl"
                        style={{
                            backgroundImage: `url('${Forensik}')`,
                        }}
                    >
                        <div className=" text-white pl-2 pt-[9.5em]  ">
                        <p className=" text-lg"> 20 Maret 2022 </p>
                        <h1 className="xl:text-2xl lg:text-xl font-bold">
                            Ada Apa Dengan Front-End
                        </h1>
                    </div>
                    </div>
                    <div
                        className=" bg-cover h-[14em] md:mt-[2em] mt-5 text-white bg-black rounded-xl"
                        style={{
                            backgroundImage: `url('${Sosial}')`,
                        }}
                    >
                        <div className=" text-white pl-2 pt-[9.5em]  ">
                        <p className=" text-lg"> 20 Maret 2022 </p>
                        <h1 className="xl:text-2xl lg:text-xl font-bold">
                            Ada Apa Dengan Front-End
                        </h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ArtikelHeadline