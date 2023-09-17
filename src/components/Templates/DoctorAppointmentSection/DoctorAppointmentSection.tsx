"use client";

import DoctorAppointmentFilter from "@/components/Organisms/DoctorAppointmentFilter/DoctorAppointmentFilter";
import React, { useEffect, useState } from "react";
import IAppointmentFilter from "@/utils/Interfaces/IAppointmentFilter";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";

const DoctorAppointmentSection = () => {
    const [filter, setFilter] = useState<IAppointmentFilter>({
        date: {
            init: null,
            finish: null,
        },
        speciality: "",
        patientName: "",
    });

    const [appointments, setAppointments] =
        useState<IAppointment[]>(AppointmentsMockup);

    const appointmentCards = appointments.map((appointment) => {
        return <PatientCard appointment={appointment} />;
    });

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    return (
        <div className="px-48">
            <p className="text-2xl font-semibold">Mis citas</p>
            <DoctorAppointmentFilter filter={filter} setFilter={setFilter} />
            <Pagination
                items={appointmentCards}
                itemsPerPage={12}
                orientation="row"
            />
        </div>
    );
};

export default DoctorAppointmentSection;
