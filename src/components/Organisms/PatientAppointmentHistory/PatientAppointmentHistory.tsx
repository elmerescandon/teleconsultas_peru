import ButtonPrimary2 from "@/components/Atoms/Buttons/ButtonPrimary2/ButtonPrimary2";
import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import LabelPoints from "@/components/Atoms/Labels/LabelPoints/LabelPoints";
import LinkNew from "@/components/Atoms/Links/LinkNew/LinkNew";
import PopUpNotes from "@/components/Atoms/PopUp/PopUpNotes/PopUpNotes";
import NutritionNotesPatient from "@/components/Molecules/NutritionNotesPatient/NutritionNotesPatient";
import PsychologyNotes from "@/components/Molecules/PsychologyNotes/PsychologyNotes";
import PsychologyNotesPatient from "@/components/Molecules/PsychologyNotesPatient/PsychologyNotesPatient";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { stringToDate } from "@/utils/functions/utils";
import { getHourRange } from "@/utils/functions/utilsDate";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { start } from "repl";

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
        startDate,
        endDate,
        summary,
        diagnosis,
        symptoms,
        prescription,
        treatment,
        joinURL,
    } = appointment;

    const [summaryState, setSummaryState] = useState<{
        doctorName: string;
        specialityName: string;
    }>({ doctorName: "", specialityName: "" });

    const [openNotes, setOpenNotes] = useState<boolean>(false);

    useEffect(() => {
        const getInfoFromDb = async (
            doctorId: string,
            specialityId: string
        ) => {
            if (doctorId === "" || specialityId === "") return;
            const doctor = await getDoctorName(doctorId);
            const speciality = await getSpecialityName(specialityId);

            if (doctor && speciality) {
                setSummaryState({
                    specialityName: speciality.name,
                    doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
                });
            } else {
                setSummaryState({ doctorName: "", specialityName: "" });
            }
        };

        getInfoFromDb(doctorId, specialityId);
    }, []);

    return (
        <div
            className="rounded-t-xl rounded-r-xl border-2 p-10
                        max-xl:px-5"
        >
            <h1
                className="text-2xl pb-5
                            max-xl:text-xl"
            >{`Cita ${stringToDate(date as unknown as Timestamp)}`}</h1>
            <div
                className="px-36
                            max-xl:px-0"
            >
                <div
                    className="flex flex-row flex-grow gap-24 pb-10 items-start
                                max-xl:flex-col max-xl:gap-0"
                >
                    <div className="w-1/2 max-xl:w-full">
                        <LabelInformation
                            label="Médico"
                            value={summaryState.doctorName}
                        />
                        <LabelInformation
                            label="Especialidad"
                            value={summaryState.specialityName}
                        />
                    </div>
                    <div className="w-1/2 max-xl:w-full">
                        <LabelInformation
                            label="Fecha"
                            value={stringToDate(date as unknown as Timestamp)}
                        />
                        <LabelInformation
                            label="Hora"
                            value={startDate && endDate && getHourRange(startDate, endDate) || ""}
                        />
                    </div>
                </div>
                {specialityId === "speciality3" ? (
                    <NutritionNotesPatient appointment={appointment} />
                ) : null}
                {specialityId === "speciality1" ? (
                    <ButtonPrimary2 onClickFn={() => setOpenNotes(true)}>
                        Ver mis notas
                    </ButtonPrimary2>
                ) : null}
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
                {joinURL ? (
                    <div className="pt-10">
                        <LinkNew to={joinURL} newTab={true}>
                            Unirse a la cita
                        </LinkNew>
                    </div>
                ) : null}
            </div>
            {specialityId === "speciality1" && openNotes ? (
                <PopUpNotes
                    onClose={() => {
                        setOpenNotes(false);
                    }}
                    appointment={appointment}
                />
            ) : null}
        </div>
    );
};

export default PatientAppointmentHistory;
