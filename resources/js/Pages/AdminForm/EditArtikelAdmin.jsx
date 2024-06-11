import EditArtikelForm from "@/Components/AdminDashboard/EditArtikelForm";
import HeaderRegister from "@/Components/HeaderRegister";
import { router, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const EditArtikelAdmin = ({ artikel }) => {
    // const [values, setValues] = useState({
    //     judul: artikel.judul,
    //     tanggal: artikel.tanggal,
    //     deskripsi: artikel.deskripsi,
    //     gambar: "", //tambahan
    // });

    const { data, setData, errors } = useForm({
        judul: artikel.judul,
        tanggal: artikel.tanggal,
        deskripsi: artikel.deskripsi,
        gambar: artikel.gambar,
    });

    useEffect(() => {
        setData({
            judul: artikel.judul,
            tanggal: artikel.tanggal,
            deskripsi: artikel.deskripsi,
            gambar: artikel.gambar,
        });
    }, [artikel]);

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/artikel/${artikel.id}`, data);
    }

    // const { values, setValues } = useForm({
    //     judul: artikel.judul || "",
    //     tanggal: artikel.tanggal || "",
    //     deskripsi: artikel.deskripsi || "",
    //     gambar: "",
    //     _method: "PUT",
    // });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setValues((values) => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     router.put(`/artikel/${artikel.id}`, values)
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData(); // create a new FormData instance
    //     formData.append("judul", values.judul);
    //     formData.append("tanggal", values.tanggal);
    //     formData.append("deskripsi", values.deskripsi);
    //     formData.append("gambar", values.gambar); // add the file to the formData

    //     // // router.put(`/artikel/${artikel.id}`, formData); // send the formData to the server
    //     // // post(route("artikel.update"));

    //     router.put(`/artikel/${artikel.id}`, formData);
    //     // put(`/artikel/${artikel.id}`);
    // }

    // function handleFileChange(e) {
    //     setValues((values) => ({
    //         ...values,
    //         gambar: e.target.files[0], // store the file
    //     }));
    // }

    return (
        <div>
            <HeaderRegister />
            {/* <EditArtikelForm /> */}
            <div className="flex w-full justify-center items-center py-10 font-inter">
                <div className="lg:w-[55em] md:h-[51em] md:w-[45em] h-[49em] w-[21em] bg-[#E9E9E9] m-auto rounded-lg">
                    <form action="" onSubmit={handleSubmit} className="">
                        <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                            <h1 className="md:text-4xl text-3xl font-bold  color-black">
                                Edit Artikel
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
                                    id="judul"
                                    value={data.judul}
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
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
                                    id="gambar"
                                    // onChange={handleFileChange}
                                    onChange={(e) =>
                                        setData("gambar", e.target.files[0])
                                    }
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
                                    id="tanggal"
                                    value={data.tanggal}
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                        setData("tanggal", e.target.value)
                                    }
                                />
                            </div>

                            <div className="">
                                <label
                                    htmlFor=""
                                    className="pl-1 font-bold text-lg"
                                >
                                    Body
                                </label>
                                <textarea
                                    className="textarea block w-full h-28 mt-1"
                                    placeholder="Body Berita"
                                    id="deskripsi"
                                    value={data.deskripsi}
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                        setData("deskripsi", e.target.value)
                                    }
                                ></textarea>
                            </div>

                            {/* <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                className="textarea block w-full h-28 mt-1"
                                placeholder="Deskripsi Berita"
                            ></textarea>
                        </div> */}

                            <button
                                className="btn bg-[#F3D457] hover:bg-[#F3D457] mt-2  text-white text-lg w-full"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            a
        </div>
    );
};

export default EditArtikelAdmin;

// ArtikelEdit.js
