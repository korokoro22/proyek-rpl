import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const AdminLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        router.post("login", {
            email: email,
            password: password,
        });
    };
    return (
        <div>
            <div className="flex w-full justify-center items-center pt-12 font-inter">
                <div className="md:w-[30em] md:h-[30em] h-[24em]  w-[21em] bg-[#E9E9E9] align-middle m-auto rounded-xl">
                    <form action="" className="" onSubmit={handleSubmit}>
                        <div className="md:w-[27em] w-[20em]  m-auto md:mt-20 mt-10 flex flex-col gap-y-5">
                            <h1 className="md:text-4xl text-3xl font-bold ">
                                MASUK
                            </h1>
                            <input
                                type="text"
                                placeholder="Alamat Email"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-5"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered md:h-[3.5em] border-[#D1D1D1] w-full"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="btn bg-[#F3D457] hover:bg-[#F3D457] text-white text-lg"
                                type="submit"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginForm;
