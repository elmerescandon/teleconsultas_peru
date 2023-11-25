"use client";
import AppointmentsBar from "@/components/Molecules/AppointmentsBar/AppointmentsBar";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import SpecialityFilter from "@/components/Molecules/SpecialityFilter/SpecialityFilter";
import PatientAppointmentHistory from "@/components/Organisms/PatientAppointmentHistory/PatientAppointmentHistory";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import useAppointments from "@/utils/hooks/useAppointments";
import React, { useEffect, useState } from "react";

const PatientHistorySection = () => {
    const [date, setDate] = useState<IDateRangeAppointment>({
        init: null,
        finish: null,
    });
    const [selectedAppointment, setSelectedAppointment] = useState<string>("");
    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;
    const appointments = useAppointments(
        date,
        userInfo,
        setSelectedAppointment
    );

    return (
        <div className="px-48 max-xl:px-10 pb-28 min-h-[90vh]">
            <div className="flex justify-between">
                <h1 className="font-semibold text-4xl py-5">Historia</h1>
                <SpecialityFilter />
                <DateFilter date={date} setDate={setDate} />
            </div>
            <AppointmentsBar
                appointments={appointments}
                selectedAppointment={selectedAppointment}
                selectFn={(id: string) => {
                    setSelectedAppointment(id);
                }}
            />
            {appointments && appointments.length > 0 && selectedAppointment ? (
                <PatientAppointmentHistory
                    appointment={
                        appointments.filter((appointment) => {
                            return appointment._id === selectedAppointment;
                        })[0]
                    }
                />
            ) : null}
            {selectedAppointment === "" && appointments.length > 0 && (
                <div className="flex justify-center py-48 text-2xl">
                    Selecciona una cita para ver su historia
                </div>
            )}
        </div>
    );
};

export default PatientHistorySection;
