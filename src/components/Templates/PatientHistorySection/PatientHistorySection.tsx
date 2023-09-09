"use client";
import AppointmentsBar from "@/components/Molecules/AppointmentsBar/AppointmentsBar";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import PatientAppointmentHistory from "@/components/Organisms/PatientAppointmentHistory/PatientAppointmentHistory";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import useAppointments from "@/utils/hooks/useAppointments";
import React, { useState } from "react";

const PatientHistorySection = () => {
    const [date, setDate] = useState<IDateRangeAppointment>({
        init: null,
        finish: null,
    });
    const [selectedAppointment, setSelectedAppointment] = useState<string>("");
    const appointments = useAppointments(date, setSelectedAppointment);

    return (
        <div className="px-48 max-xl:px-10 pb-28 min-h-[90vh]">
            <div className="flex justify-between">
                <h1 className="font-semibold text-4xl py-5">Historia</h1>
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
