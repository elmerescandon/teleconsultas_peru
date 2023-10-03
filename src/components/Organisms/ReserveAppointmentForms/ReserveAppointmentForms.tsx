"use client";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import { getDoctorsFromSpeciality } from "@/firebase/Doctor/getDoctorsFromSpeciality";
import { getSpecialities } from "@/firebase/Speciality/getSpecialities";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import {
    useAppointment,
    useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getSpecialitiesOptions,
    getDoctorsOptions,
} from "@/utils/functions/utils";
import reasonMockup from "@/utils/mockups/reasonMockup";
import symptomsMockup from "@/utils/mockups/symptomsMockup";
import React, { useEffect, useState } from "react";

const ReserveAppointmentForms = () => {
    const dispatch = useAppointmentDispatch();
    const appointment = useAppointment();
    const { specialityId, doctorId, details } = appointment;
    const [specialitiesOptions, setSpecialitiesOptions] = useState<
        ISelectOptions[]
    >([]);
    const [doctorsOptions, setDoctorsOptions] = useState<ISelectOptions[]>([]);

    useEffect(() => {
        const getSpecialitiesFromDb = async () => {
            const specialities = await getSpecialities();
            if (specialities) {
                setSpecialitiesOptions(getSpecialitiesOptions(specialities));
            }
        };
        getSpecialitiesFromDb();
    }, []);

    useEffect(() => {
        const getDoctorsFromDb = async (specialityId: string) => {
            const doctors = await getDoctorsFromSpeciality(specialityId);
            if (doctors) {
                setDoctorsOptions(getDoctorsOptions(doctors));
            }
        };

        if (specialityId === "") {
            setDoctorsOptions([]);
        }

        if (appointment?.specialityId !== "") {
            getDoctorsFromDb(appointment.specialityId);
        }
    }, [specialityId, doctorId]);

    return (
        <div className="w-1/3 max-xl:pb-8 px-5 max-w-md flex-grow max-xl:w-full ">
            <div className="text-xl font-semibold py-4">Escoge tu cita</div>
            <div className="flex gap-5 flex-col">
                <RegisterField title="Especialidad (Obligatorio)" error="">
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

                <RegisterField title="Doctor (Obligatorio)" error="">
                    <InputSelect
                        key={2}
                        selectId="doctor"
                        placeholder="Escoge al profesional de la salud"
                        options={doctorsOptions}
                        onChange={(e) => {
                            dispatch({
                                type: "SET_DOCTOR",
                                payload: e,
                            });
                        }}
                    />
                </RegisterField>

                <RegisterField title="Razón de consulta (Obligatorio)" error="">
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

                <RegisterField title="Síntomas" error="">
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

                <RegisterField title="Detalles" error="">
                    <InputTextArea
                        cols={80}
                        rows={5}
                        placeholder="Por favor, indique más detalles sobre su consulta"
                        message={details}
                        onChange={(value: string) => {
                            dispatch({
                                type: "SET_DETAILS",
                                payload: value,
                            });
                        }}
                    />
                </RegisterField>
            </div>
        </div>
    );
};

export default ReserveAppointmentForms;
