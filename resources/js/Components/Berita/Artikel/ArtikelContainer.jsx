import React, { useEffect, useState } from "react";
import ArtikelCard from "./ArtikelCard";
import { Link } from "@inertiajs/react";
import ReactPaginate from "react-paginate"; // for pagination

const ArtikelContainer = ({ cobas }) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 6;

    useEffect(() => {
        setFilterData(
            cobas.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    console.log(filterData);

    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                {/* {cobas
                    .filter((cob) => cob.id <= 6)
                    .map((coba) => (
                        <ArtikelCard key={coba.id} {...coba} />
                    ))} */}
                {filterData &&
                    filterData.map((item) => (
                        <ArtikelCard key={item.id} {...item} />
                    ))}
            </div>
            {/* <div className="text-center ">
                <Link >
                    <button className="bg-[#24A0ED] text-white my-5 px-2 py-[0.5em] rounded-xl text-base font-semibold ">
                        Berita Lainnya
                    </button>
                </Link>
            </div> */}
            <div className="flex m-auto items-center justify-center flex-col pb-5">
                <ReactPaginate
                    containerClassName={"join"}
                    activeClassName={"btn-active"}
                    pageClassName={"join-item btn"}
                    onPageChange={(event) => setPage(event.selected)}
                    breakLabel="..."
                    pageCount={Math.ceil(cobas.length / n)}
                    previousLabel={
                        <button className="join-item btn">«</button>

                    }
                    nextLabel={
                        <button className="join-item btn">»</button>
                    }
                />
            </div>
        </div>
    );
};

export default ArtikelContainer;
