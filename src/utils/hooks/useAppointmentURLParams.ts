import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppointment, useAppointmentDispatch } from "../context/AppointmentContext/AppointmentContext";
import { useAppSelector } from "@/redux/hooks";
import { IState } from "@/redux/store";
import getAppointment from "@/firebase/Appointments/getAppointment";
import { createAppointment } from "../functions/utils";
import getAppointmentId from "@/firebase/Appointments/getAppointmentId";
import IUserState from "@/redux/state-interfaces/User/IUserState";

const useAppointmentURLParams = () => {
    const params = useSearchParams();
    const dispatch = useAppointmentDispatch();
    const appointment = useAppointment();

    const [appointmentExisted, setAppointmentExisted] = useState<null | boolean>(null);

    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;


    useEffect(() => {
        const getTemporalId = async () => {
            dispatch({ type: "SET_APPOINTMENT", payload: await getAppointmentId(appointment) });
        }

        const updateAppointment = () => {
            const updatedAppointment = createAppointment(appointment, userInfo);
            dispatch({ type: "SET_APPOINTMENT", payload: updatedAppointment });
        }

        const getAppointmentData = async () => {
            const appointmentId = params.get("appId");
            if (appointmentId === null) {
                setAppointmentExisted(false);
                return;
            }

            const newAppointment = await getAppointment(appointmentId);
            if (newAppointment === null) {
                setAppointmentExisted(false);
                return;
            }
            dispatch({ type: "SET_APPOINTMENT", payload: newAppointment });
            setAppointmentExisted(true);
        }

        if (appointmentExisted === null) {
            getAppointmentData();
        } else {
            if (!appointmentExisted) {
                if (appointment.patientId === "" && userInfo._id !== "" && appointment.date !== "") updateAppointment();
                if (appointment._id === "") getTemporalId();
            }
        }
    }, [appointment, user, appointmentExisted])

    return { appointmentExisted, appointment };

}



export default useAppointmentURLParams;