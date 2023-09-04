import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

const PatientDate = () => {
    return (
        <button className="flex items-center w-full px-10 py-3 justify-between bg-brand-600 text-basic-white rounded-3xl">
            <div>
                <div>Medicina General</div>
                <div>Fecha: 02/08/2023 7:30AM</div>
            </div>
            <div>Dr. Pedro Pascal</div>
            <button>
                <BookOpenIcon className="w-8 h-8 text-brand-100" />
            </button>
        </button>
    );
};

export default PatientDate;
