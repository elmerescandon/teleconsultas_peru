import {useEffect, useState} from "react";
import {useAppointmentDispatch} from "../context/AppointmentContext/AppointmentContext";
import {useSearchParams} from "next/navigation";
import SalufyService from "@/services/Salufy/Salufy.services";
import usePageState from "./usePageState";
import IAppointment from "../Interfaces/reducers/IAppointment";

const useReservation = () => {
    const {pageState, setSuccess, setError, setLoading, errorMessage} =
        usePageState();
    const params = useSearchParams();
    const appId = params.get("appId");
    const dispatch = useAppointmentDispatch();
    const [reschedule, setReschedule] = useState<boolean>(false);

    const resetAppointment = (appointment: IAppointment) => {
        dispatch({
            type: "SET_APPOINTMENT",
            payload: appointment,
        });
        dispatch({
            type: "SET_DOCTOR",
            payload: "",
        });
        dispatch({
            type: "SET_STATUS",
            payload: "pending",
        });
        dispatch({
            type: "SET_TIME",
            payload: {
                startDate: null,
                endDate: null,
            },
        });
    };

    useEffect(() => {
        const getAppointmentData = async (id: string) => {
            try {
                setLoading();
                const appointment =
                    await SalufyService.getInstance().getAppointment(id);
                console.log("appointment hook", appointment);

                if (appointment.status !== "doctor-canceled")
                    throw new Error("No es posible editar esta cita.");

                console.log("appointment canceled");
                setReschedule(true);
                resetAppointment(appointment);
                setSuccess();
            } catch (error) {
                setError(error as Error);
            }
        };

        if (appId !== null && appId !== "") {
            console.log("appId", appId);
            getAppointmentData(appId);
        } else {
            setSuccess();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appId]);

    return {
        reschedule,
        pageState,
        errorMessage,
        setSuccess,
        setError,
        setLoading,
        resetAppointment,
    };
};

export default useReservation;
