import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import React from "react";

const ReserveAppointmentForms = () => {
    const optionsSpeciality = [
        { value: "radiografia", label: "Radiografía" },
        { value: "medicina-general", label: "Medicina General" },
    ];

    const optionsDoctor = [
        { value: "doctor-1", label: "Doctor 1" },
        { value: "doctor-2", label: "Doctor 2" },
    ];

    const optionsReason = [
        { value: "consulta", label: "Consulta" },
        { value: "control", label: "Control" },
    ];

    const optionsSymptoms = [
        { value: "dolor", label: "Dolor" },
        { value: "fiebre", label: "Fiebre" },
    ];

    return (
        <div className="w-1/3 max-xl:py-28">
            <InputSelect
                selectId="speciality"
                placeholder="Escoge tu especialidad"
                options={optionsSpeciality}
            />
            <InputSelect
                selectId="doctor"
                placeholder="Escoge al especialista"
                options={optionsDoctor}
            />
            <InputSelect
                selectId="reason"
                placeholder="Selecciona el motivo de tu consulta"
                options={optionsReason}
            />
            <InputSelect
                selectId="symptoms"
                placeholder="Indica uno o más síntomas"
                options={optionsSymptoms}
            />
            <InputTextArea cols={80} rows={10} />
        </div>
    );
};

export default ReserveAppointmentForms;
