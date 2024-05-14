import React from "react";
import DpiLogo from "../assets/logo/dpilogo.png";

const HeaderRegister = () => {
    return (
        <div className="w-full h-24 bg-[#020202] flex-col items-center text-white font-inter flex justify-center">
            <div>
                <img src={DpiLogo} alt="" className="h-[3.5em]" />
            </div>
            <p className="text-center font-semibold">Daya Potensia Indonesia</p>
        </div>
    );
};

export default HeaderRegister;
