"use client";
import {ServerDay} from "@/components/Atoms/Days/ServerDay";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import {getAvailableDays} from "@/firebase/Availability/geAvailableDays";
import {
    useAppointment,
    useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    changeTimezone,
    dateToSpanish,
    dateValuesToDates,
    getNowDay,
    setDateToTimezoneConstantWithTime,
} from "@/utils/functions/utilsDate";
import {DateCalendar, DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";

const ReserveAppointmentCalendar = () => {
    const appointment = useAppointment();
    const {doctorId, specialityId} = appointment;
    const dispatch = useAppointmentDispatch();

    const [dateJS, setDateJS] = useState<IDateJS | null>(null);
    const [highlightedDays, setHighlightedDays] = useState<string[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onChangeDate = (date: IDateJS | null) => {
        if (!date) return;
        let dateTemp = new Date(date);
        setDateJS(date);
        dispatch({
            type: "SET_DATE",
            payload: setDateToTimezoneConstantWithTime(dateTemp),
        });
    };

    const dateString =
        dateJS !== null
            ? dateToSpanish(setDateToTimezoneConstantWithTime(new Date(dateJS)))
            : "";

    useEffect(() => {
        const getHighlightedDays = async (
            doctorId: string,
            specialityId: string
        ) => {
            try {
                setLoading(true);
                const highlightedDays = await getAvailableDays(
                    doctorId,
                    specialityId
                );
                if (highlightedDays === null)
                    throw new Error("No hay días disponibles para este doctor");
                setHighlightedDays(
                    dateValuesToDates(highlightedDays.dateArray)
                );
                setError("");
                setLoading(false);
            } catch (error) {
                setHighlightedDays([]);
                setError((error as Error).message);
                setLoading(false);
            }
        };

        if (doctorId && specialityId) {
            getHighlightedDays(doctorId, specialityId);
        } else {
            setHighlightedDays([]);
            setDateJS(null);
            setError("");
        }
    }, [doctorId, specialityId]);

    return (
        <div className="px-5 w-auto">
            <div className="text-xl font-semibold py-4">
                Calendario Disponible
            </div>
            <DateCalendar
                minDate={dayjs(getNowDay()) as unknown as IDateJS}
                sx={{
                    width: "100%",
                    position: "relative",
                    zIndex: -10,
                }}
                value={dateJS}
                onChange={onChangeDate}
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        highlightedDays,
                    } as any,
                }}
            />
            {error === "" && !loading && dateJS && (
                <p className="text-brand-600 font-semibold -mt-8 text-center">
                    {dateString}
                </p>
            )}
            {error && (
                <p className="text-brand-600 font-semibold -mt-4 text-center">
                    {error}
                </p>
            )}
            {loading && <LoadingHorizontal />}
        </div>
    );
};

export default ReserveAppointmentCalendar;
