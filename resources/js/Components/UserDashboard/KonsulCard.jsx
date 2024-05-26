import { Link } from '@inertiajs/react'
import React from 'react'

const KonsulCard = ({jadwal, keluhan, harapan}) => {
  return (

    
    <div>
        <div className='md:w-[30em] w-[21em] m-auto bg-white p-5 rounded-lg flex flex-col justify-center'>
        <div className='border-b-[3px] border-[#d9d9d9] pb-4 flex items-center justify-center'>
          <h1 className='text-lg font-semibold w-full'>Jadwal Konsultasi</h1>
          <h1 className=' w-full '>{jadwal} </h1>
        </div>
        <div className='border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center'>
          <h1 className='text-lg font-semibold w-full'>Keluhan </h1>
          <h1 className='w-full text-justify '>{keluhan} </h1>
        </div>
        <div className='border-b-[3px] border-[#d9d9d9] pb-4 mt-4 flex items-center'>
          <h1 className='text-lg font-semibold w-full'>Harapan </h1>
          <h1 className='w-full text-justify '>{harapan}  </h1>
        </div>
      </div>
      <div className="md:text-end text-center mb-10 ">
                <Link>
                    <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                        Hapus Jadwal
                    </button>
                </Link>
                <Link href='/form-konsultasi'>
                    <button className="bg-[#24A0ED] text-white px-2 py-[0.5em] mt-2 rounded-xl text-sm font-semibold">
                        Tambah Jadwal
                    </button>
                </Link>
            </div>
    </div>
  )
}

export default KonsulCard