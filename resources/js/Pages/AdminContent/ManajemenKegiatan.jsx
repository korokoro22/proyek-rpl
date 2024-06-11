import DashboardAdmin from "@/Components/Layout/DashboardAdmin";
import React, { useContext, useEffect, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { kegiatanData } from "../../utils/AdminDummy/kegiatan";

const ManajemenKegiatan = ({ kegiatan }) => {
    // const kegiatans = kegiatanData();

    function deleteKegiatan(id) {
        router.delete(`/kegiatan/${id}`);
    }

    return (
        <DashboardAdmin>
            <div className={`font-inter py-16  bg-slate-800`}>
                <div>
                    <div className="md:text-end mb-2 mr-2 ">
                        <Link href="/kegiatan/create">
                            <button className="bg-[#24A0ED] text-white px-2 py-[0.5em] rounded-xl text-sm font-semibold">
                                Tambah Kegiatan
                            </button>
                        </Link>
                    </div>
                    {/* {kegiatans.length > 0 ? (
                        <table className={`table bg-white text-black `}>
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
                                {kegiatans.map((kegiatan) => (
                                    <tr key={kegiatan.id}>
                                        <th>{kegiatan.id}</th>
                                        <td>
                                            <h1 className="line-clamp-2 hover:line-clamp-none">{kegiatan.judul}</h1>
                                        </td>
                                        <td>
                                            <img
                                                src={kegiatan.gambar}
                                                alt="Avatar Tailwind CSS Component"
                                                className="rounded-xl w- h-[5em] object-cover"
                                            />
                                        </td>
                                        <td>{kegiatan.tanggal}</td>
                                        <td className="">
                                            <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none ">
                                                {" "}
                                                {kegiatan.body}
                                            </p>
                                        </td>
                                        <td>
                                            <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                                {" "}
                                                {kegiatan.deskripsi}
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
                    <table className={`table bg-white text-black `}>
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
                            {kegiatan.map((kegiatan, index) => (
                                <tr key={index}>
                                    <th>{kegiatan.id}</th>
                                    <td>
                                        <h1 className="line-clamp-2 hover:line-clamp-none">
                                            {kegiatan.judul}
                                        </h1>
                                    </td>
                                    <td>
                                        <img
                                            src={`storage/${kegiatan.gambar}`}
                                            alt="Avatar Tailwind CSS Component"
                                            className="rounded-xl w- h-[5em] object-cover"
                                        />
                                    </td>
                                    <td>{kegiatan.tanggal}</td>
                                    <td className="">
                                        <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none ">
                                            {" "}
                                            {kegiatan.body}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xs text-justify line-clamp-3 hover:line-clamp-none">
                                            {" "}
                                            {kegiatan.deskripsi}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="xl:flex">
                                            <Link
                                                href={`/kegiatan/${kegiatan.id}/edit`}
                                                className="bg-[#04AA6D] text-white px-3 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="bg-[#d11a2a] text-white px-2 py-[0.5em] mt-2 mr-2 rounded-xl text-sm font-semibold"
                                                onClick={() =>
                                                    deleteKegiatan(kegiatan.id)
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

export default ManajemenKegiatan;
