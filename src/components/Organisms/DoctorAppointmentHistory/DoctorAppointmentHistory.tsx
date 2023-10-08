"use client";
import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import LabelInformationEdit from "@/components/Molecules/LabelInformationEdit/LabelInformationEdit";
import LabelPointsEdit from "@/components/Molecules/LabelPointsEdit/LabelPointsEdit";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    getDoctorNameMockup as getDoctorName,
    getSpecialityName,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";
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
        patientId,
    } = currentAppointment;

    const { summary: dataSummary } = useAppointmentInfo(
        doctorId,
        specialityId,
        patientId
    );

    return (
        <div className="rounded-t-xl rounded-r-xl border-2 py-10 px-5">
            <h1 className="text-2xl pb-5">{`Cita ${stringToDate(date)}`}</h1>
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
                    value={summary}
                    setValue={(value: string) => {
                        setCurrentAppointment({
                            ...currentAppointment,
                            summary: value,
                        });
                    }}
                />
                <LabelPointsEdit label="Síntomas" points={symptoms} />
                <LabelPointsEdit label="Diagnóstico" points={diagnosis} />
                <LabelPointsEdit label="Prescripción" points={prescription} />
                <LabelPointsEdit label="Tratamiento" points={treatment} />
            </div>
        </div>
    );
};

export default DoctorAppointmentHistory;
