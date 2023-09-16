"use client";
import React from "react";
import Pagination from "../Pagination/Pagination";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";

const DoctorAppointments = () => {
    // TODO: Filter according to the doctor's id and day
    const user: IUserState = useAppSelector((state) => state.user);
    const { _id } = user.userInfo;
    const appointments = AppointmentsMockup.map((appointment) => {
        return <PatientCard key={appointment._id} appointment={appointment} />;
    });

    return (
        <div className="w-full">
            <p className="text-xl font-semibold pb-5">Tus citas para hoy</p>
            <div className="px-20 max-xl:px-5">
                {appointments && appointments.length > 0 ? (
                    <Pagination
                        orientation="row"
                        items={appointments as React.JSX.Element[]}
                        itemsPerPage={5}
                    />
                ) : (
                    <p>No tienes citas para hoy</p>
                )}
            </div>
        </div>
    );
};

export default DoctorAppointments;
