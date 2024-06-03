import LayananCard from "@/Components/Homepage/LayananHome/LayananCard";
import React, { useEffect, useState } from "react";
import KegiatanCard from "./KegiatanCard";
import ReactPaginate from "react-paginate"; // for pagination

const KegiatanContainer = ({ cobas }) => {
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

    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5">
                {filterData &&
                    filterData.map((item) => (
                        <KegiatanCard key={item.id} {...item} />
                    ))}
            </div>
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

export default KegiatanContainer;
