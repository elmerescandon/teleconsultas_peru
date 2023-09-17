"use client";
import AppointmentCard from "@/components/Molecules/AppointmentCard/AppointmentCard";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";
import React from "react";

type DoctorPatientSectionProps = {
    patient: IUser;
};

const DoctorPatientSection = ({ patient }: DoctorPatientSectionProps) => {
    const { name } = patient;
    const patientAppointments = AppointmentsMockup.filter(
        (appointment) => appointment.patientId === patient._id
    );

    const patientCards = patientAppointments.map((appointment) => (
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
