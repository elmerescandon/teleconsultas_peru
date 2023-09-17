"use client";
import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import LabelPoints from "@/components/Atoms/Labels/LabelPoints/LabelPoints";
import LabelInformationEdit from "@/components/Molecules/LabelInformationEdit/LabelInformationEdit";
import LabelPointsEdit from "@/components/Molecules/LabelPointsEdit/LabelPointsEdit";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    getDoctorName,
    getSpecialityName,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import React from "react";

type DoctorAppointmentHistoryProps = {
    appointment: IAppointment;
};

const DoctorAppointmentHistory = ({
    appointment,
}: DoctorAppointmentHistoryProps) => {
    const [currentAppointment, setCurrentAppointment] =
        React.useState<IAppointment>(appointment);
    const {
        date,
        doctorId,
        specialityId,
        price,
        summary,
        diagnosis,
        symptoms,
        prescription,
        treatment,
        startDate,
        endDate,
        status,
    } = currentAppointment;

    return (
        <div className="rounded-t-xl rounded-r-xl border-2 py-10 px-5">
            <h1 className="text-2xl pb-5">{`Cita ${stringToDate(date)}`}</h1>
            <div className="px-5 max-xl:px-0">
                <div className="flex flex-row flex-grow gap-24 max-xl:gap-0 pb-10 max-xl:flex-col v max-xl:pb-0 xl:items-center">
                    <div className="w-full">
                        <LabelInformation
                            label="Médico"
                            value={getDoctorName(doctorsMockup, doctorId)}
                        />
                        <LabelInformation
                            label="Especialidad"
                            value={getSpecialityName(
                                specialitiesMockup,
                                specialityId
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <LabelInformation
                            label="Fecha"
                            value={stringToDate(date)}
                        />
                        <LabelInformation
                            label="Monto"
                            value={`${price ? `S/.${price}` : "Por Definir"}`}
                        />
                    </div>
                    <div className="w-full">
                        <LabelInformation
                            label="Hora"
                            value={getAppointmentHours(startDate, endDate)}
                        />
                        <LabelInformation
                            label="Estado"
                            value={statusToSpanish(status)}
                        />
                    </div>
                </div>
                <LabelInformationEdit
                    label="Resumen"
                    value={summary as string}
                    setValue={(value: string) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            summary: value,
                        });
                    }}
                />
                <LabelPointsEdit
                    label="Síntomas"
                    points={symptoms as string[]}
                />
                <LabelPointsEdit
                    label="Diagnóstico"
                    points={diagnosis as string[]}
                />
                <LabelPointsEdit
                    label="Prescripción"
                    points={prescription as string[]}
                />
                <LabelPointsEdit
                    label="Tratamiento"
                    points={treatment as string[]}
                />
            </div>
        </div>
    );
};

export default DoctorAppointmentHistory;
