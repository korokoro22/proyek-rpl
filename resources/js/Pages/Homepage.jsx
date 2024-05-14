import React from "react";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import CarouselHero from "@/Components/Homepage/CarouselHero";
import LayananContainer from "@/Components/Homepage/LayananHome/LayananContainer";
import { layananData } from "../utils/layanan";
import { penunjangData } from "@/utils/penunjang";
import { teamData } from "@/utils/teamDpi";
import PenunjangContainer from "@/Components/Homepage/PenunjangHome/PenunjangContainer";
import ProfileContainer from "@/Components/Homepage/ProfileHome/ProfileContainer";
import KlienTerpercaya from "@/Components/Homepage/KlienTerpercaya";
import Footer from "@/Components/Footer";

export default function Homepage() {
    return (
        <div>
            <Header />
            <CarouselHero />
            <LayananContainer layanans={layananData()} />
            <PenunjangContainer penunjangs={penunjangData()} />
            <ProfileContainer profiles={teamData()} />
            <KlienTerpercaya />
            <Footer />
        </div>
    );
}
