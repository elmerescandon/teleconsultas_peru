import { ArrowRightIcon } from "@mui/x-date-pickers";
import React from "react";

type DoctorListProps = {
    openPopUp: () => void;
};

const DoctorList = ({ openPopUp }: DoctorListProps) => {
    return (
        <button
            className="text-brand-900 font-semibold flex items-center py-1"
            onClick={openPopUp}
        >
            <ArrowRightIcon className="text-brand-900 w-8 h-8 ml-2" />
            <p>Conoce a nuestros doctores</p>
        </button>
    );
};

export default DoctorList;
