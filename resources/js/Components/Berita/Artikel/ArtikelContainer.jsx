import React from 'react'
import ArtikelCard from './ArtikelCard'

const ArtikelContainer = () => {
  return (
    <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                <ArtikelCard />
                <ArtikelCard />
                <ArtikelCard />
                <ArtikelCard />
                <ArtikelCard />
                <ArtikelCard />
            </div>
        </div>
  )
}

export default ArtikelContainer