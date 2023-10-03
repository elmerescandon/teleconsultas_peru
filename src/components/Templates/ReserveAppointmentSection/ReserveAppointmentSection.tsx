"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PopUpReservation from "@/components/Atoms/PopUp/PopUpReservation/PopUpReservation";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import ReserveSummary from "@/components/Organisms/ReserveSummary/ReserveSummary";
import { getAvailableDates } from "@/firebase/Availability/getAvailableDates";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { validateAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ReserveAppointmentSection = () => {
    const userState: IUserState = useAppSelector((state) => state.user);
    const { logged } = userState;
    const router = useRouter();
    const [popUp, setPopUp] = useState<boolean>(false);
    const [popUpRegister, setPopUpRegister] = useState<boolean>(false);
    const [availableAppointments, setAvailableAppointments] = useState<
        IAvailableAppointment[]
    >([]);
    const appointment = useAppointment();
    const { date, doctorId, specialityId } = appointment;

    const [loadingDates, setLoadingDates] = useState<boolean>(false);

    const onClickReserve = (appointment: IAppointment) => {
        if (validateAppointment(appointment)) {
            if (!logged) {
                setPopUpRegister(true);
                return;
            }
            router.push(Routes.RESERVE_PAYMENT);
        } else {
            setPopUp(true);
            return;
        }
    };

    useEffect(() => {
        const getAvailableAppointments = async (
            date: string,
            doctorId: string,
            specialityId: string
        ) => {
            setLoadingDates(true);
            const availableDates = await getAvailableDates(
                date,
                doctorId,
                specialityId
            );

            setLoadingDates(false);
            if (availableDates) {
                setAvailableAppointments(availableDates);
            } else {
                setAvailableAppointments([]);
            }
        };

        if (date !== "") {
            getAvailableAppointments(date, doctorId, specialityId);
        }
    }, [date, doctorId]);

    return (
        <div className="px-48  py-10  max-xl:px-20 max-md:px-5">
            <div className="flex max-xl:flex-col max-xl:items-center max-xl:justify-around ">
                <ReserveAppointmentForms />
                <div className="w-1/3 max-xl:w-full max-xl:flex max-md:flex-col max-xl:justify-around">
                    <ReserveAppointmentCalendar />
                    <ReserveAppointmentHours
                        loading={loadingDates}
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
                    title="¡Lo sentimos!"
                    message="Debes completar todos los campos para poder agendar una cita"
                    onClose={() => {
                        setPopUp(false);
                    }}
                />
            )}
            {popUpRegister && (
                <PopUpReservation
                    requireSession={true}
                    title="¡Ya falta poco!"
                    message="Inicia sesión o regístrate para agendar una cita"
                    onClose={() => {
                        setPopUpRegister(false);
                    }}
                />
            )}
        </div>
    );
};

export default ReserveAppointmentSection;
