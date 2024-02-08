import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppointment, useAppointmentDispatch } from "../context/AppointmentContext/AppointmentContext";
import { useAppSelector } from "@/redux/hooks";
import { IState } from "@/redux/store";
import getAppointment from "@/firebase/Appointments/getAppointment";
import { createAppointment, validateAppointment } from "../functions/utils";
import getAppointmentId from "@/firebase/Appointments/getAppointmentId";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import createNewAppointment from "@/firebase/Appointments/createNewAppointment";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import checkAppointment from "@/firebase/Appointments/checkAppointment";

const useAppointmentURLParams = () => {
    const params = useSearchParams();
    const dispatch = useAppointmentDispatch();
    const appointment = useAppointment();

    const [appointmentExisted, setAppointmentExisted] = useState<null | boolean>(null);
    const [appointmentUpdated, setAppointmentUpdated] = useState<boolean>(false);

    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;


    useEffect(() => {

        const constructAppointment = async () => {
            const newAppointmentId = (await getAppointmentId(appointment))._id
            const newAppointment = { ...createAppointment(appointment, userInfo), _id: newAppointmentId };
            dispatch({ type: "SET_APPOINTMENT", payload: newAppointment });
            setAppointmentUpdated(true);
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

        const uploadAppointment = async () => {
            if (!appointmentExisted && validateAppointment(appointment) && !(await checkAppointment(appointment._id))) {
                await createNewAppointment(appointment);
            } else {
                await updateAppointmentField(appointment._id, "status", "pending");
            }
        }

        if (appointmentExisted === null) {
            getAppointmentData();
        } else {
            if (!appointmentExisted) {
                if (appointment.patientId === "" && userInfo._id !== "" && appointment.date !== "" && appointment._id === "") {
                    constructAppointment();
                    return;
                }
                if (appointmentUpdated) uploadAppointment();
            }
        }
    }, [appointment, user, appointmentExisted])

    return { appointmentExisted, appointment };

}



export default useAppointmentURLParams;