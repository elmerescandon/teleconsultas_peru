"use client";
import AppointmentCard from "@/components/Molecules/AppointmentCard/AppointmentCard";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import getAllPatientAppointments from "@/firebase/Patient/getAllPatientAppointments";
import { getPatientName } from "@/firebase/Patient/getPatientName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, { useEffect, useState } from "react";

type DoctorPatientSectionProps = {
    patientId: string;
};

const DoctorPatientSection = ({ patientId }: DoctorPatientSectionProps) => {
    const [appointment, setAppointment] = useState<IAppointment[]>([]);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const getPatientInfo = async (patientId: string) => {
            const patientInfo = await getPatientName(patientId);
            const appointments = await getAllPatientAppointments(patientId);

            if (patientInfo && appointments) {
                setName(`${patientInfo.name} ${patientInfo.lastName}`);
                setAppointment(appointments);
            }
        };
        if (patientId) {
            getPatientInfo(patientId);
        }
    }, []);

    const patientCards = appointment.map((appointment) => (
        <AppointmentCard key={appointment._id} appointment={appointment} />
    ));

    return (
        <div className="flex flex-col px-48 py-10 max-xl:pt-36 gap-5 max-xl:px-5 w-full  h-[60vh]">
            <p className="text-2xl font-semibold">{name}</p>
            <Pagination
                orientation="col"
                itemsPerPage={5}
                items={patientCards}
            />
        </div>
    );
};

export default DoctorPatientSection;
