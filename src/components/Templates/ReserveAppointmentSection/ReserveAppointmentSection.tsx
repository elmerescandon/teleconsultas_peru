import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PopUpReservation from "@/components/Atoms/PopUp/PopUpReservation/PopUpReservation";
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
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ReserveAppointmentSection = () => {
    const router = useRouter();
    const [popUp, setPopUp] = useState<boolean>(false);
    const [availableAppointments, setAvailableAppointments] = useState<
        IAvailableAppointment[]
    >([]);
    const appointment = useAppointment();
    const { date, doctorId, specialityId } = appointment;

    const onClickReserve = (appointment: IAppointment) => {
        if (validateAppointment(appointment)) {
            router.push(Routes.RESERVE_PAYMENT);
        } else {
            setPopUp(true);
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
            {popUp && (
                <PopUpReservation
                    onClose={() => {
                        setPopUp(false);
                    }}
                />
            )}
        </div>
    );
};

export default ReserveAppointmentSection;
