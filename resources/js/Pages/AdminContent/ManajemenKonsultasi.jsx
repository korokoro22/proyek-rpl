import DashboardAdmin from '@/Components/Layout/DashboardAdmin'
import React from 'react'
import { konsultasiData } from "../../utils/AdminDummy/konsultasi"
import { Link } from '@inertiajs/react'


const ManajemenKonsultasi = () => {

    const konsuls = konsultasiData();

  return (
    <DashboardAdmin>
        <div className="font-inter py-16 ">
                <div
                    className={` m-auto `}
                >
                    
                    {konsuls.length > 0 ? (
                        <table className="table bg-white text-black">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th> Usia</th>
                                    <th>Pekerjaan</th>
                                    <th>Alamat</th>
                                    <th>Jadwal</th>
                                    <th>Keluhan </th>
                                    <th>Harapan </th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {konsuls.map((konsul) => (
                                    <tr key={konsul.id}>
                                        <th>{konsul.id}</th>
                                        <td>
                                            <h1>{konsul.nama}</h1>
                                        </td>
                                        <td>
                                            <p>{konsul.kelamin}</p>
                                        </td>
                                        <td>{konsul.usia}</td>
                                        <td>
                                            <p>{konsul.pekerjaan}</p>
                                        </td>
                                        <td>
                                            <p>{konsul.alamat}</p>
                                        </td>
                                        <td>
                                            <p>{konsul.jadwal}</p>
                                        </td>
                                        <td className='text-justify '>
                                            <p className='line-clamp-3 hover:line-clamp-none' >{konsul.keluhan}</p>
                                        </td>
                                        <td className='text-justify'>
                                            <p className='line-clamp-3 hover:line-clamp-none'>{konsul.harapan}</p>
                                        </td>
                                        <td>
                                            <div className="xl:flex">
                                                <Link>
                                                    <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 ml-2 rounded-xl text-sm font-semibold">
                                                        Hapus
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center text-2xl text-black font-inter ">
                            Tidak Ada Data Kegiatan
                        </div>
                    )}
                </div>
            </div>
    </DashboardAdmin>
  )
}

export default ManajemenKonsultasi