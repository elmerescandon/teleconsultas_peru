"use client";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import {
    useAppointment,
    useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getSpecialitiesOptions,
    getDoctorsOptions,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import reasonMockup from "@/utils/mockups/reasonMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import symptomsMockup from "@/utils/mockups/symptomsMockup";
import React, { useEffect, useState } from "react";

const ReserveAppointmentForms = () => {
    // TODO: Reason and Symptoms only enable when doctor is selected

    const specialitiesOptions = getSpecialitiesOptions(specialitiesMockup);

    const dispatch = useAppointmentDispatch();
    const appointment = useAppointment();
    const { specialityId, doctorId, details } = appointment;

    const [doctorsOptions, setDoctorsOptios] = useState<IUser[]>([]);

    useEffect(() => {
        if (appointment?.specialityId !== "") {
            const newDoctorOptions = doctorsMockup.filter((doctor) => {
                if (doctor?.specialties) {
                    return doctor.specialties.includes(specialityId);
                }
            });
            setDoctorsOptios(newDoctorOptions);
        }
    }, [specialityId, doctorId]);

    return (
        <div className="max-xl:pt-28 max-xl:pb-8 px-5 max-w-md">
            <div className="text-xl font-semibold py-4">Escoge tu cita</div>
            <div className="flex flex-col gap-5">
                <RegisterField title="Especialidad">
                    <InputSelect
                        key={1}
                        selectId="speciality"
                        placeholder="Escoge tu especialidad"
                        options={specialitiesOptions}
                        onChange={(e: string) => {
                            dispatch({
                                type: "SET_SPECIALITY",
                                payload: e,
                            });
                        }}
                    />
                </RegisterField>

                <RegisterField title="Doctor">
                    <InputSelect
                        key={2}
                        selectId="doctor"
                        placeholder="Escoge al profesional de la salud"
                        options={getDoctorsOptions(doctorsOptions)}
                        onChange={(e) => {
                            dispatch({
                                type: "SET_DOCTOR",
                                payload: e,
                            });
                        }}
                    />
                </RegisterField>

                <RegisterField title="Razón de consulta">
                    <InputSelect
                        key={3}
                        selectId="reason"
                        placeholder="Selecciona el motivo de tu consulta"
                        options={reasonMockup}
                        onChange={(e) => {
                            dispatch({
                                type: "SET_REASON",
                                payload: e,
                            });
                        }}
                    />
                </RegisterField>

                <RegisterField title="Síntomas">
                    <InputSelect
                        key={4}
                        selectId="symptoms"
                        placeholder="Indica uno o más síntomas"
                        options={symptomsMockup}
                        onChange={(e) => {
                            dispatch({
                                type: "SET_SYMPTOMS",
                                payload: [e],
                            });
                        }}
                    />
                </RegisterField>

                <RegisterField title="Detalles">
                    <InputTextArea
                        cols={80}
                        rows={5}
                        placeholder="Por favor, indique más detalles sobre su consulta"
                        message={details}
                        onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                        ) => {
                            dispatch({
                                type: "SET_DETAILS",
                                payload: e.target.value,
                            });
                        }}
                    />
                </RegisterField>
            </div>
        </div>
    );
};

export default ReserveAppointmentForms;
