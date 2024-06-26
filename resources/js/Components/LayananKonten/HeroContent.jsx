import React from 'react'
import Industri from "../../assets/Layanan/industri.jpg"

const HeroContent = () => {
  return (
    <div className=" relative font-inter">
            <div
                className="w-full xl:h-[30em]  md:h-[25em] h-[15em] bg-cover static "
                style={{
                    backgroundImage: `url('${Industri}')`,
                }}
            >
                <div className="bg-black w-full h-full opacity-50"></div>
            </div>
            <p className=" text-white opacity-100 absolute xl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold xl:left-22 lg:left-24 xl:top-[6em] lg:top-[7em] md:top-[8em] top-[10em] md:left-12 left-5">
                Psikologi Industri <br /> dan Organisasi
            </p>
        </div>
  )
}

export default HeroContent