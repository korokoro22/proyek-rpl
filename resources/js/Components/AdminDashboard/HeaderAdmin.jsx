import React,{ useState } from "react";
import LogoDpi from "../../assets/logo/dpilogo.png";
import Avatar from "../../assets/logo/avatar.png";
import { Link } from "@inertiajs/react";

const HeaderAdmin = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className={`bg-[#020202] w-full h-[5.5em] py-5 duration-300 flex items-center justify-center rounded-b-2xl`}>
            <div className="">
                <img src={LogoDpi} alt="" className="w-24 ml-4" />
                
            </div>
            
        </div>
    );
};

export default HeaderAdmin;
