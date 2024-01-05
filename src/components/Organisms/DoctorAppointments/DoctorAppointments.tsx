"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import getDoctorAppointments from "@/firebase/Appointments/getDoctorAppointments";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";

const DoctorAppointments = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { _id } = user.userInfo;
    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    const appointmentsElements = appointments.map((appointment) => {
        return <PatientCard key={appointment._id} appointment={appointment} />;
    });

    useEffect(() => {
        const getAppointments = async (id: string, status: string[]) => {
            if (!id) return console.log("No hay id");
            const appointments = await getDoctorAppointments(id, status);
            if (appointments) {
                setAppointments(appointments);
            }
        };
        getAppointments(_id, ["scheduled", "pending"]);
    }, []);

    return (
        <div className="w-full">
            <p className="text-xl font-semibold pb-5">Tus citas para hoy</p>
            <div className="max-xl:px-5">
                {appointmentsElements && appointmentsElements.length > 0 ? (
                    <Pagination
                        orientation="row"
                        items={appointmentsElements as React.JSX.Element[]}
                        itemsPerPage={2}
                    />
                ) : (
                    <p>No tienes citas para hoy</p>
                )}
            </div>
        </div>
    );
};

export default DoctorAppointments;
