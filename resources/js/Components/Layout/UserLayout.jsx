import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const UserLayout = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Header />
            <div className="bg-[#e9e9e9] ">
                <main className="md:flex  justify-center lg:gap-28 gap-14 m-auto py-10  font-inter">
                    <aside className=" hidden w-[12em] h-[13em] md:flex flex-col justify-center gap-y-5 pl-5 rounded-lg bg-white shadow-2xl">
                        <Link
                            href="/user-profile"
                            className="block hover:text-[#F3D457] font-semibold text-lg border-[#d9d9d9] border-b-[3px] pb-3 w-[8em]"
                        >
                            Profile
                        </Link>
                        <Link
                            href="/user-akun"
                            className="block text-lg hover:text-[#F3D457] font-semibold border-b-[3px] pb-3 w-[8em] border-[#d9d9d9]"
                        >
                            {" "}
                            Akun
                        </Link>
                        <Link
                            href="/jadwal-konsul"
                            className="text-lg font-semibold hover:text-[#F3D457]"
                        >
                            {" "}
                            Jadwal Konsul
                        </Link>
                    </aside>
                    <div className=" md:hidden w-[21em] h-14 bg-white  m-auto flex  items-center justify-between my-5 rounded-xl">
                        <h1 className="text-black font-semibold ml-3">
                            Sub Nav
                        </h1>

                        <div
                            className="lg:hidden text-3xl text-black pr-5"
                            onClick={() => setOpen(!open)}
                        >   
                            <ion-icon name="menu" className=" w-32 "></ion-icon>
                        </div>

                        {/* Mobile */}
                        <ul
                            className={`lg:hidden bg-[#020202] top-[6em]  absolute w-full h-fiit py-   duration-500 ${
                                open ? "left-0" : "left-[-100%]"
                            }`}
                        >
                            <li className="flex items-center justify-between bg-[#020202]   h-[5em] px-3  lg:cursor-pointer font-bold text-white ">
                                <Link
                                    className="pr-10 hover:text-[#F3D457]"
                                   href="/user-profile"
                                >
                                    Profile
                                </Link>
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="text-3xl"
                                >
                                    <ion-icon name="close"></ion-icon>
                                </div>
                            </li>
                            <li>
                                <Link
                                    className="pr-10 bg-[#020202] hover:text-[#F3D457]  py-7 px-3 inline-block lg:cursor-pointer font-bold text-white"
                                   href="/user-akun"
                                >
                                    Akun
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="pr-10 bg-[#020202] hover:text-[#F3D457]  py-7 px-3 inline-block lg:cursor-pointer font-bold text-white"
                                   href="/jadwal-konsul"
                                >
                                    Jadwal Konsul
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">{children}</div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default UserLayout;
