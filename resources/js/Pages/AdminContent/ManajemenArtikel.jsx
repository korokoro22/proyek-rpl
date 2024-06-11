import DashboardAdmin from "@/Components/Layout/DashboardAdmin";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";
import { kegiatanData } from "../../utils/AdminDummy/kegiatan";

const ManajemenArtikel = ({ artikel }) => {
    //aslinya kosong

    // const artikels = kegiatanData();

    // const deleteArtikel = async (id) => {
    //     Inertia.delete(`/artikel/${id}`);
    // }

    function deleteArtikel(id) {
        router.delete(`/artikel/${id}`);
    }

    // function destroy(e) {
    //         router.delete(route("artikel.destroy", e.currentTarget.id));
    // }

    return (
        <DashboardAdmin>
            <div className="font-inter py-16 ">
                <div className={` m-auto `}>
                    <div className="md:text-end mb-2 mr-2 ">
                        <Link href="/artikel/create">
                            <button className="bg-[#24A0ED] text-white px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                                Tambah Kegiatan
                            </button>
                        </Link>
                    </div>
                    {/* {artikels.length > 0 ? (
                        <table className="table bg-white text-black">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Gambar</th>
                                    <th> Tanggal</th>
                                    <th>Body</th>
                                    <th>Deskripsi</th>

                                </tr>
                            </thead>
                            <tbody>
                                {artikels.map((artikel) => (
                                    <tr key={artikel.id}>
                                        <th>{artikel.id}</th>
                                        <td>
                                            <h1 className='line-clamp-2 hover:line-clamp-none'>{artikel.judul}</h1>
                                        </td>
                                        <td>
                                            <img
                                                src={artikel.gambar}
                                                alt="Avatar Tailwind CSS Component"
                                                className="rounded-xl w- h-[5em] object-cover"
                                            />
                                        </td>
                                        <td>{artikel.tanggal}</td>
                                        <td className="">
                                            <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                                {" "}
                                                {artikel.body}
                                            </p>
                                        </td>
                                        <td>
                                            <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                                {" "}
                                                {artikel.deskripsi}
                                            </p>
                                        </td>
                                        <td>
                                            <div className="xl:flex">
                                                <Link>
                                                    <button className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
                                                        Edit
                                                    </button>
                                                </Link>
                                                <Link>
                                                    <button className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold">
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
                    )} */}

                    <table className="table bg-white text-black">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Gambar</th>
                                <th> Tanggal</th>
                                <th>Body</th>
                                <th>Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artikel.map((artikel, index) => (
                                <tr key={index}>
                                    <th>{artikel.id}</th>
                                    <td>
                                        <h1 className="line-clamp-2 hover:line-clamp-none">
                                            {artikel.judul}
                                        </h1>
                                    </td>
                                    <td>
                                        <img
                                            src={`storage/${artikel.gambar}`}
                                            alt="Avatar Tailwind CSS Component"
                                            className="rounded-xl w- h-[5em] object-cover"
                                        />
                                    </td>
                                    <td>{artikel.tanggal}</td>
                                    <td className="">
                                        <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                            {" "}
                                            {artikel.deskripsi}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                            {" "}
                                            {artikel.deskripsi}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="xl:flex">
                                            <Link
                                                href={`/artikel/${artikel.id}/edit`}
                                                className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                                                onClick={() =>
                                                    deleteArtikel(artikel.id)
                                                }
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardAdmin>
    );
};

export default ManajemenArtikel;
