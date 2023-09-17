import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";
import React, { useState, useEffect, ReactElement } from "react";

interface PaginationProps {
    items: ReactElement[];
    itemsPerPage: number;
    orientation: "row" | "col";
}

const Pagination: React.FC<PaginationProps> = ({
    items,
    itemsPerPage,
    orientation,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentItems, setCurrentItems] = useState<ReactElement[]>([]);

    useEffect(() => {
        // Calculate the total number of pages
        const totalPagesCount = Math.ceil(items.length / itemsPerPage);
        setTotalPages(totalPagesCount);

        // Update the current items based on the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = items.slice(startIndex, endIndex);
        setCurrentItems(itemsToDisplay);
    }, [items, itemsPerPage, currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="w-full justify-center">
            <div
                className={`flex ${
                    orientation === "col"
                        ? "flex-col"
                        : "flex-row justify-start items-start"
                } gap-2 max-xl:flex-col flex-wrap`}
            >
                {currentItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <div className="pagination pt-3">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ArrowLeftIcon
                        className={`w-10 h-10 text-brand-900 ${
                            currentPage === 1 ? "text-neutral-200" : ""
                        }`}
                    />
                </button>
                <span>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ArrowRightIcon
                        className={`w-10 h-10 text-brand-900 ${
                            currentPage === totalPages ? "text-neutral-200" : ""
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
