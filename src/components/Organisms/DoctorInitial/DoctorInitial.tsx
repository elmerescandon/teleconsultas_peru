"use client";
import TimeDisplay from "@/components/Atoms/Time/TimeDisplay";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { areDatesEqual } from "@/utils/functions/utils";
import React from "react";

const DoctorInitial = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { name, reserved_appointments } = user.userInfo;
    const numberOfAppointments =
        reserved_appointments !== undefined
            ? reserved_appointments.filter((appointment) =>
                  areDatesEqual(new Date(appointment.date), new Date())
              ).length
            : 0;
    return (
        <div className="flex justify-between w-full items-center">
            <h1 className="text-3xl font-bold">Welcome, {name}!</h1>
            <div>
                <p>{`Tienes ${numberOfAppointments} citas agendadas para hoy`}</p>
                <TimeDisplay />
            </div>
        </div>
    );
};

export default DoctorInitial;
