"use client";
import ButtonReserve from "@/components/Atoms/Buttons/ButtonReserve/ButtonReserve";
import PopUpReservationOptions from "@/components/Atoms/PopUp/PopUpReservationOptions/PopUpReservationOptions";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import {useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import SalufyService from "@/services/Salufy/Salufy.services";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    useAppointment,
    useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import {validateReservation} from "@/utils/functions/utils";
import useReservation from "@/utils/hooks/useReservation";
import Routes from "@/utils/routes/Routes";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

const ReserveAppointmentSection = () => {
    const {reschedule, pageState, setLoading, setSuccess, setError} =
        useReservation();

    const Salufy = SalufyService.getInstance();

    const userState: IUserState = useAppSelector((state) => state.user);
    const {logged, userInfo} = userState;
    const router = useRouter();

    const [popUps, setPopUps] = useState<number>(0);

    const appointment = useAppointment();
    const dispatch = useAppointmentDispatch();

    const onClickReserve = async (appointment: IAppointment) => {
        try {
            setLoading();
            if (!validateReservation(appointment)) setPopUps(2);
            if (!logged) setPopUps(1);
            if (!logged || !validateReservation(appointment)) return;

            if (reschedule.state && reschedule.type !== "") {
                await Salufy.updateAppointmentDoctorCanceled(
                    appointment._id,
                    appointment,
                    reschedule.type
                );
                dispatch({
                    type: "RESET",
                });
                router.push(Routes.PATIENT_HOME);
            } else if (appointment._id === "" && !reschedule.state) {
                const appId = await Salufy.createAppointment(
                    appointment,
                    userInfo._id
                );
                dispatch({
                    type: "SET_APPOINTMENT",
                    payload: {...appointment, _id: appId},
                });
                router.push(Routes.RESERVE_PAYMENT);
            } else {
                router.push(Routes.PATIENT_HOME);
                throw new Error("Error al reservar la cita");
            }
        } catch (error) {
            setError(error as Error);
            setLoading();
        }
    };

    return (
        <div
            className="px-48  py-10
                        max-xl:px-20 max-xl:py-24 
                        max-md:px-5"
        >
            <div className="flex max-xl:flex-col max-xl:items-center max-xl:justify-around ">
                <ReserveAppointmentForms reschedule={reschedule.state} />
                <div className="w-full max-xl:w-full max-xl:flex max-md:flex-col max-xl:justify-around">
                    <ReserveAppointmentCalendar />
                    <ReserveAppointmentHours />
                </div>
            </div>
            <ButtonReserve
                loading={pageState === "loading"}
                onClickFn={() => onClickReserve(appointment)}
            />
            <PopUpReservationOptions popUps={popUps} setPopUps={setPopUps} />
        </div>
    );
};

export default ReserveAppointmentSection;
