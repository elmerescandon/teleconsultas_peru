"use client";
import ButtonReserve from "@/components/Atoms/Buttons/ButtonReserve/ButtonReserve";
import PopUpReservation from "@/components/Atoms/PopUp/PopUpReservation/PopUpReservation";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import getAppointment from "@/firebase/Appointments/getAppointment";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import { getAvailableDates } from "@/firebase/Availability/getAvailableDates";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { useAppointment, useAppointmentDispatch } from "@/utils/context/AppointmentContext/AppointmentContext";
import { validateAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { set } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ReserveAppointmentSection = () => {
    const params = useSearchParams();
    const appointmentSearch = params.get("appId");



    const userState: IUserState = useAppSelector((state) => state.user);
    const { logged } = userState;
    const router = useRouter();

    const [popUp, setPopUp] = useState<boolean>(false);
    const [popUpRegister, setPopUpRegister] = useState<boolean>(false);
    const [availableAppointments, setAvailableAppointments] = useState<
        IAvailableAppointment[]
    >([]);

    const appointment = useAppointment();
    const dispatch = useAppointmentDispatch();

    const { date, doctorId, specialityId } = appointment;
    const [loadingDates, setLoadingDates] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(false);

    const onClickReserve = (appointment: IAppointment) => {


        if (validateAppointment(appointment)) {
            if (!logged) {
                setPopUpRegister(true);
                return;
            }

            if (appointment.status === "doctor-canceled") {
                updateAppointmentField(appointment._id, "status", "pending");
                updateAppointmentField(appointment._id, "doctorId", appointment.doctorId);
                updateAppointmentField(appointment._id, "date", new Date(appointment.date));
                updateAppointmentField(appointment._id, "startDate", appointment.startDate);
                updateAppointmentField(appointment._id, "endDate", appointment.endDate);
                setConfirm(true);
                router.push(Routes.PATIENT_HOME);
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

    useEffect(() => {
        const getAppointmentData = async (id: string) => {
            try {
                const newAppointment = await getAppointment(id);
                if (newAppointment !== null && newAppointment.status === "doctor-canceled") {
                    dispatch({
                        type: "SET_APPOINTMENT",
                        payload: newAppointment,
                    });
                    dispatch({
                        type: "SET_DOCTOR",
                        payload: "",
                    });
                    dispatch({
                        type: "SET_TIME",
                        payload: {
                            startDate: "",
                            endDate: "",
                        },
                    });
                }
            } catch (error) {
                router.push(Routes.PATIENT_HOME);
            }
        };

        if (appointmentSearch !== null && appointmentSearch !== "") {
            getAppointmentData(appointmentSearch);
        }
    }, []);

    return (
        <div
            className="px-48  py-10
                        max-xl:px-20 max-xl:py-24 
                        max-md:px-5"
        >
            <div className="flex max-xl:flex-col max-xl:items-center max-xl:justify-around ">
                <ReserveAppointmentForms />
                <div className="w-full max-xl:w-full max-xl:flex max-md:flex-col max-xl:justify-around">
                    <ReserveAppointmentCalendar />
                    <ReserveAppointmentHours
                        loading={loadingDates}
                        availableAppointments={availableAppointments}
                    />
                </div>
            </div>
            <ButtonReserve onClickFn={() => onClickReserve(appointment)} />
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
            {confirm && (
                <div className="flex gap-3">
                    <p>Se realizó correctamente el registro de la cita, por favor espere</p>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default ReserveAppointmentSection;
