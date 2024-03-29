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
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DoctorList from "../DoctorList/DoctorList";
import PopUpDoctorList from "@/components/Atoms/PopUp/PopUpDoctorList/PopUpDoctorList";

const ReserveAppointmentForms = () => {
    const searchParams = useSearchParams();

    const dispatch = useAppointmentDispatch();
    const appointment = useAppointment();
    const { specialityId, doctorId, status, reason, details } = appointment;
    const [specialitiesOptions, setSpecialitiesOptions] = useState<
        ISelectOptions[]
    >([]);
    const [doctorsOptions, setDoctorsOptions] = useState<ISelectOptions[]>([]);
    const [popUpDoctor, setPopUpDoctor] = useState<boolean>(false);

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
        } else {
            getDoctorsFromDb(specialityId);
        }
    }, [specialityId, doctorId]);

    return (
        <div className="max-xl:pb-8 px-5 flex-grow max-xl:w-full ">
            <div className="text-xl font-semibold py-4">Escoge tu cita</div>
            <p className="italic font-semibold pb-5">* Campo obligatorio</p>

            <div className="flex gap-5 flex-col">
                <RegisterField title="Especialidad*" error="">
                    {status !== "doctor-canceled" && (
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
                            fistValue={searchParams.get("spec") || ""}
                        />)}
                    {status === "doctor-canceled" && (
                        <div className="font-semibold text-lg py-3">{specialitiesOptions.find((option) => option.value === specialityId)?.label || ""}</div>
                    )}
                </RegisterField>

                <RegisterField title="Doctor*" error="">
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
                    {doctorsOptions && doctorsOptions.length > 0 && (
                        <DoctorList
                            openPopUp={() => {
                                setPopUpDoctor(true);
                            }}
                        />
                    )}
                </RegisterField>

                <RegisterField title="Razón de consulta*" error="">
                    {status !== "doctor-canceled" && <InputSelect
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
                    />}
                    {status === "doctor-canceled" && (
                        <div className="font-semibold text-lg py-3">{reasonMockup.find((option) => option.value === reason)?.label || ""}</div>
                    )}
                </RegisterField>

                {status !== "doctor-canceled" && <RegisterField title="Síntomas" error="">
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
                </RegisterField>}
                <RegisterField title="Detalles" error="">
                    {status !== "doctor-canceled" && <InputTextArea
                        cols={80}
                        rows={5}
                        placeholder="Por favor, indique más detalles sobre su consulta"
                        onChange={(value: string) => {
                            dispatch({
                                type: "SET_DETAILS",
                                payload: value,
                            });
                        }}
                    />}
                    {status === "doctor-canceled" &&
                        <div className="font-semibold text-lg py-3 w-[30vw]">
                            {details || "No hay detalles"}
                        </div>}
                </RegisterField>
            </div>
            {popUpDoctor && (
                <PopUpDoctorList
                    onClose={() => {
                        setPopUpDoctor(false);
                    }}
                    specialityId={specialityId}
                />
            )}
        </div>
    );
};

export default ReserveAppointmentForms;
