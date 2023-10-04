"use client";
import PatientDate from "@/components/Molecules/PatientDate/PatientDate";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";

const PatientAppointments = () => {
    const state: IUserState = useAppSelector((state) => state.user);
    const [patientAppointments, setPatientAppointments] = useState<
        IAppointment[]
    >([]);
    const { userInfo } = state;

    useEffect(() => {
        const getAppointments = async () => {
            if (!userInfo) return;
            const appointments = await getUserAppointments(
                userInfo._id,
                "pending"
            );
            setPatientAppointments(appointments);
        };
        getAppointments();
    }, [state]);

    return (
        <div className="w-2/3 rounded-3xl border-neutral-300 border-2 py-5 px-10 h-96 max-xl:h-full max-xl:w-full">
            <div className="text-xl font-semibold">Citas Agendadas</div>
            <div className="flex flex-col items-center py-5 gap-4">
                <Pagination
                    orientation="col"
                    itemsPerPage={3}
                    items={patientAppointments.map((appointment, index) => {
                        return (
                            <PatientDate
                                key={index}
                                appointment={appointment}
                            />
                        );
                    })}
                />
            </div>
        </div>
    );
};

export default PatientAppointments;
