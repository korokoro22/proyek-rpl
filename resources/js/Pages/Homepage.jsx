import React from "react";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";


export default function Homepage(props) {
    
    return (
        <div className=" min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row items-center gap-4 lg:flex-wrap lg:items-stretch p-4  ">
                <NewsLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
