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
    const [reschedule, setReschedule] = useState<{
        state: boolean;
        type: "" | "doctor-canceled/pending" | "doctor-canceled/scheduled";
    }>({state: false, type: ""});

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
                if (
                    appointment.status !== "doctor-canceled/pending" &&
                    appointment.status !== "doctor-canceled/scheduled"
                )
                    throw new Error("No es posible editar esta cita.");
                setReschedule({
                    state: true,
                    type: appointment.status,
                });
                resetAppointment(appointment);
                setSuccess();
            } catch (error) {
                setError(error as Error);
            }
        };

        if (appId !== null && appId !== "") {
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
