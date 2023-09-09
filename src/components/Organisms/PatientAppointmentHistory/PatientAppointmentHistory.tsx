import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import LabelPoints from "@/components/Atoms/Labels/LabelPoints/LabelPoints";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getDoctorName,
    getSpecialityName,
    stringToDate,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import React from "react";

type PatientAppointmentHistoryProps = {
    appointment: IAppointment;
};

const PatientAppointmentHistory = ({
    appointment,
}: PatientAppointmentHistoryProps) => {
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
    } = appointment;
    return (
        <div className="rounded-t-xl rounded-r-xl border-2 p-10">
            <h1 className="text-2xl pb-5">{`Cita ${stringToDate(date)}`}</h1>
            <div className="px-36">
                <div className="flex flex-row flex-grow gap-24 pb-10">
                    <div className="w-1/2">
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
                    <div className="w-1/2">
                        <LabelInformation
                            label="Fecha"
                            value={stringToDate(date)}
                        />
                        <LabelInformation
                            label="Monto"
                            value={`${price ? `S/.${price}` : "Por Definir"}`}
                        />
                    </div>
                </div>
                {summary ? (
                    <LabelInformation label="Resumen" value={summary} />
                ) : null}
                {symptoms ? (
                    <LabelPoints label="Síntomas" points={symptoms} />
                ) : null}
                {diagnosis ? (
                    <LabelPoints label="Diagnóstico" points={diagnosis} />
                ) : null}
                {prescription ? (
                    <LabelPoints label="Prescripción" points={prescription} />
                ) : null}
                {treatment ? (
                    <LabelPoints label="Prescripción" points={treatment} />
                ) : null}
            </div>
        </div>
    );
};

export default PatientAppointmentHistory;
