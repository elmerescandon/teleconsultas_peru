import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import ReserveSummary from "@/components/Organisms/ReserveSummary/ReserveSummary";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getAvailableAppointments,
    validateAppointment,
} from "@/utils/functions/utils";
import React, { useEffect, useState } from "react";

const ReserveAppointmentSection = () => {
    const [availableAppointments, setAvailableAppointments] = useState<
        IAvailableAppointment[]
    >([]);
    const appointment = useAppointment();
    const { date, doctorId, specialityId } = appointment;

    const onClickReserve = (appointment: IAppointment) => {
        if (validateAppointment(appointment)) {
            console.log("Appointment is valid");
        } else {
            console.log("Appointment is not valid");
        }
    };

    useEffect(() => {
        console.log(appointment);
        if (date !== "") {
            //  This getAvailable is a mock function that returns the available appointments for the date
            const available = getAvailableAppointments(
                date,
                doctorId,
                specialityId
            );
            setAvailableAppointments(available);
        }
    }, [appointment]);

    return (
        <div className="px-48  py-10  max-xl:px-10 ">
            <div className="flex max-xl:flex-col max-xl:items-center justify-around">
                <ReserveAppointmentForms />
                <div>
                    <ReserveAppointmentCalendar />
                    <ReserveAppointmentHours
                        availableAppointments={availableAppointments}
                    />
                </div>
                <ReserveSummary />
            </div>
            <div className="max-xl:pt-10 flex justify-end w-full max-xl:justify-center">
                <div className="max-xl:w-1/2">
                    <ButtonPrimary
                        onClickFn={() => {
                            onClickReserve(appointment);
                        }}
                    >
                        Agendar
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default ReserveAppointmentSection;
