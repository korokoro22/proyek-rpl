import React, { useState } from 'react'
import { router, useForm } from '@inertiajs/react'

const ArtikelForm = () => {
    // rezma
    const {data, setData} = useForm({
        judul: "",
        tanggal: "",
        deskripsi: "",
        gambar: ""
    })

    const storeArtikel = (e) => {
        e.preventDefault()
    
        router.post('/artikel', data)
       
    }

  return (
    //rezma, tambahan id, value dan onChange
    <div className="flex w-full justify-center items-center py-10 font-inter">
            <div className="lg:w-[55em] md:h-[51em] md:w-[45em] h-[49em] w-[21em] bg-[#E9E9E9] m-auto rounded-lg">
                <form className="" onSubmit={storeArtikel}>
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Isi Artikel
                        </h1>
                        <div className="mt-5">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                                id='judul'
                                value={data.judul}
                                onChange={(e)=> setData('judul', e.target.value)}
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Gambar
                            </label>
                            <input
                                type="file"
                                className="file-input md:h-[3.5em] border-[#D1D1D1] w-full mt-1 flex items-center justify-center "
                                id='gambar'
                                
                                

                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Tanggal
                            </label>
                            <input
                                type="date"
                                id='tanggal'
                                placeholder="Tanggal"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                                value={data.tanggal}
                                onChange={(e)=> setData('tanggal', e.target.value)}
                           />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Body
                            </label>
                            <textarea className="textarea block w-full h-28 mt-1"
                            id='deskripsi' placeholder="Body Artikel"
                            value={data.deskripsi}
                            onChange={(e)=> setData('deskripsi', e.target.value)}
                            ></textarea>
                        </div>

                        {/* <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Deskripsi
                            </label>
                            <textarea className="textarea block w-full h-28 mt-1" placeholder="Deskripsi Artikel"></textarea>
                        </div> */}

                        <button className="btn bg-[#F3D457] hover:bg-[#F3D457] mt-2" type='submit'>
                            Button
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ArtikelForm