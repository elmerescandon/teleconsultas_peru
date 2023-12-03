import React from "react";
import ElementSlider from "../ElementSlider/ElementSlider";
import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";

const EspecialitiesMedicine = () => {
    const specialityPhysical = [
        "Gastroenterología",
        "Neurología",
        "Endrocrinología",
        "Cardiología",
        "Otorrinolaringología",
        "Pediatría",
        "Dermatología",
        "Traumatología",
        "Oftalmología",
        "Reumatología",
        "Hematología",
        "Infectología",
        "Nefrología",
        "Neumología",
    ];

    const specialityItems = specialityPhysical.map((speciality, index) => (
        <LabelPrimary content={speciality} key={index} />
    ));

    const columns = 3;
    const specialityColumns = Array.from(
        { length: Math.ceil(specialityItems.length / columns) },
        (_, i) => (
            <div className="flex flex-col space-y-4 pr-5" key={i}>
                {specialityItems.slice(i * columns, i * columns + columns)}
            </div>
        )
    );
    return (
        <div>
            <p
                className="px-72 text-4xl text-brand-600 font-semibold py-5 text-center
                max-2xl:px-10"
            >
                Especialidades
            </p>
            <ElementSlider items={specialityColumns} />
        </div>
    );
};

export default EspecialitiesMedicine;
