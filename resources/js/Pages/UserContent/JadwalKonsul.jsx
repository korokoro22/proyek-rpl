import UserLayout from "@/Components/Layout/UserLayout";
import KonsulCard from "@/Components/UserDashboard/KonsulCard";
import { Link } from "@inertiajs/react";
import React from "react";
UserLayout;
import { jadwalKonsul } from "../../utils/UserDump/jadwal"
import KonsulContainer from "@/Components/UserDashboard/KonsulContainer";

const JadwalKonsul = () => {


    return (
        <UserLayout>
          <KonsulContainer jadwals={jadwalKonsul()} />
        </UserLayout>
    );
};

export default JadwalKonsul;
