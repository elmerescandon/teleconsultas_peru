"use client";
import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import LabelInformationEdit from "@/components/Molecules/LabelInformationEdit/LabelInformationEdit";
import LabelPointsEdit from "@/components/Molecules/LabelPointsEdit/LabelPointsEdit";
import NutritionNotes from "@/components/Molecules/NutritionNotes/NutritionNotes";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import useAppointmentUpdate from "@/utils/hooks/useAppointmentUpdate";
import { Timestamp } from "firebase/firestore";
import React from "react";

type DoctorAppointmentHistoryProps = {
    appointment: IAppointment;
};

const DoctorAppointmentHistory = ({
    appointment,
}: DoctorAppointmentHistoryProps) => {
    const { currentAppointment, setCurrentAppointment, dataSummary } =
        useAppointmentUpdate(appointment);
    const {
        date,
        price,
        summary,
        diagnosis,
        symptoms,
        prescription,
        treatment,
        startDate,
        endDate,
        status,
        specialityId,
    } = currentAppointment;

    return (
        <div className="rounded-t-xl rounded-r-xl border-2 py-10 px-5">
            <h1 className="text-2xl pb-5">{`Cita ${stringToDate(
                date as unknown as Timestamp
            )}`}</h1>
            <div className="px-5 max-xl:px-0">
                <div className="flex flex-row flex-grow gap-24 max-xl:gap-0 pb-10 max-xl:flex-col v max-xl:pb-0 xl:items-center">
                    <div className="w-full">
                        <LabelInformation
                            label="Médico"
                            value={dataSummary.doctorName}
                        />
                        <LabelInformation
                            label="Especialidad"
                            value={dataSummary.specialityName}
                        />
                    </div>
                    <div className="w-full">
                        <LabelInformation
                            label="Fecha"
                            value={(date as unknown as Timestamp)
                                .toDate()
                                .toLocaleDateString()}
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
                {specialityId === "speciality3" ? (
                    <NutritionNotes appointment={currentAppointment} />
                ) : null}
                <LabelInformationEdit
                    label="Resumen"
                    value={summary}
                    setValue={(value: string) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            summary: value,
                        });
                    }}
                />
                <LabelPointsEdit
                    label="Síntomas"
                    points={symptoms}
                    changePoints={(symptoms) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            symptoms: symptoms,
                        });
                    }}
                />
                <LabelPointsEdit
                    label="Diagnóstico"
                    points={diagnosis}
                    changePoints={(diagnosis) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            diagnosis: diagnosis,
                        });
                    }}
                />
                <LabelPointsEdit
                    label="Prescripción"
                    points={prescription}
                    changePoints={(prescription) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            prescription: prescription,
                        });
                    }}
                />
                <LabelPointsEdit
                    label="Tratamiento"
                    points={treatment}
                    changePoints={(treatment) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            treatment: treatment,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default DoctorAppointmentHistory;
