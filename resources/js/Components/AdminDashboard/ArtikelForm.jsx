import React from 'react'

const ArtikelForm = () => {
  return (
    <div className="flex w-full justify-center items-center py-10 font-inter">
            <div className="lg:w-[55em] md:h-[51em] md:w-[45em] h-[49em] w-[21em] bg-[#E9E9E9] m-auto rounded-lg">
                <form action="" className="">
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
                                placeholder="Tanggal"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Body
                            </label>
                            <textarea className="textarea block w-full h-28 mt-1" placeholder="Body Artikel"></textarea>
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Deskripsi
                            </label>
                            <textarea className="textarea block w-full h-28 mt-1" placeholder="Deskripsi Artikel"></textarea>
                        </div>

                        <button className="btn bg-[#F3D457] hover:bg-[#F3D457] mt-2 ">
                            Button
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ArtikelForm