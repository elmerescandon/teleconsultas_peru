"use client";
import DoctorAppointmentFilter from "@/components/Organisms/DoctorAppointmentFilter/DoctorAppointmentFilter";
import React, { useEffect, useState } from "react";
import IAppointmentFilter from "@/utils/Interfaces/IAppointmentFilter";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import getDoctorAppointments from "@/firebase/Appointments/getDoctorAppointments";

const DoctorAppointmentSection = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { _id } = user.userInfo;
    const [filter, setFilter] = useState<IAppointmentFilter>({
        date: {
            init: null,
            finish: null,
        },
        speciality: "",
        patientName: "",
    });

    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    useEffect(() => {
        const getAppointments = async (id: string, status: string) => {
            const appointments = await getDoctorAppointments(id, status);
            if (appointments) {
                setAppointments(appointments);
            }
        };
        getAppointments(_id, "pending");
    }, []);

    const appointmentCards = appointments.map((appointment, index) => {
        return <PatientCard appointment={appointment} key={index} />;
    });

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
