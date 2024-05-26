import React, { useState, useEffect, } from "react";
import Sidebar from "../AdminDashboard/Sidebar";
import HeaderAdmin from "../AdminDashboard/HeaderAdmin";


const DashboardAdmin = ({ children }) => {

    const [open, setOpen] = useState(true);

    useEffect(() => {
        window.localStorage.setItem("buka", open);
        console.log("status open: ", open)
    }, [open]);



    return (
        <div>
            <main className="flex w-full">
                <Sidebar open={open} setOpen={setOpen} />
                <div className="flex flex-col items-center bg-[#E9E9E9] text-white basis-full flex-1 px-12">
                    <HeaderAdmin open={open} setOpen={setOpen} />
                    {children}
                </div>
            </main>
        </div>
    );
};

// const useOpen = () => React.useContext(OpenContext)
export default DashboardAdmin
 
