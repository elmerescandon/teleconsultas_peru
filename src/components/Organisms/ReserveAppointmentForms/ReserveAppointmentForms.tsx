"use client";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import {
    getSpecialitiesOptions,
    getDoctorsOptions,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import reasonMockup from "@/utils/mockups/reasonMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import symptomsMockup from "@/utils/mockups/symptomsMockup";
import React, { useEffect, useState } from "react";

type ReserveAppointmentFormsProps = {
    info: {
        specialityId: string;
        doctorId: string;
        reason: string;
        symptoms: string;
        details: string;
    };
    setInfo: React.Dispatch<
        React.SetStateAction<{
            specialityId: string;
            doctorId: string;
            reason: string;
            symptoms: string;
            details: string;
        }>
    >;
};

const ReserveAppointmentForms = ({
    info,
    setInfo,
}: ReserveAppointmentFormsProps) => {
    // TODO: Get Doctors from especialities
    // TODO: Reason and Symptoms only enable when doctor is selected

    const specialitiesOptions = getSpecialitiesOptions(specialitiesMockup);

    const [specialityId, setSpecialityId] = useState<string>("");
    const [doctorId, setDoctorId] = useState<string>("");

    const [doctorsOptions, setDoctorsOptios] = useState<IUser[]>([]);

    useEffect(() => {
        if (specialityId !== "") {
            const newDoctorOptions = doctorsMockup.filter((doctor) => {
                if (doctor?.specialties) {
                    return doctor.specialties.includes(specialityId);
                }
            });

            setDoctorsOptios(newDoctorOptions);
        }
    }, [specialityId]);

    return (
        <div className="w-1/3 max-xl:py-28 px-5">
            <div className="text-xl font-semibold py-4">Escoge tu cita</div>
            <div className="flex flex-col gap-5">
                <RegisterField title="Especialidad">
                    <InputSelect
                        key={1}
                        selectId="speciality"
                        placeholder="Escoge tu especialidad"
                        options={specialitiesOptions}
                        onChange={(e: string) => {
                            setSpecialityId(e);
                        }}
                    />
                </RegisterField>

                <RegisterField title="Doctor">
                    <InputSelect
                        key={2}
                        selectId="doctor"
                        placeholder="Escoge al especialista"
                        options={getDoctorsOptions(doctorsOptions)}
                        onChange={(e) => {
                            setDoctorId(e);
                        }}
                    />
                </RegisterField>

                <RegisterField title="Razón de consulta">
                    <InputSelect
                        key={3}
                        selectId="reason"
                        placeholder="Selecciona el motivo de tu consulta"
                        options={reasonMockup}
                        onChange={(e) => {}}
                    />
                </RegisterField>

                <RegisterField title="Síntomas">
                    <InputSelect
                        key={4}
                        selectId="symptoms"
                        placeholder="Indica uno o más síntomas"
                        options={symptomsMockup}
                        onChange={(e) => {}}
                    />
                </RegisterField>

                <RegisterField title="Detalles">
                    <InputTextArea
                        cols={80}
                        rows={5}
                        placeholder="Por favor, indique más detalles sobre su consulta"
                    />
                </RegisterField>
            </div>
        </div>
    );
};

export default ReserveAppointmentForms;
