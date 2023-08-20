import React from "react";

const PatientTreatments = () => {
    return (
        <div className="w-1/3 rounded-3xl border-neutral-300 border-2 py-5 px-10 h-96">
            <div className="text-xl font-semibold">Tratamientos activos</div>
            <div className="flex flex-col items-center py-5">
                <p className="text-neutral-500">
                    No te encuentras en tratamiento por el momento
                </p>
            </div>
        </div>
    );
};

export default PatientTreatments;
