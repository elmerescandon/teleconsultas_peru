"use client";
import { ServerDay } from "@/components/Atoms/Days/ServerDay";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import { getAvailableDays } from "@/firebase/Availability/geAvailableDays";
import { useAppointment, useAppointmentDispatch } from "@/utils/context/AppointmentContext/AppointmentContext";
import { dateValuesToDates } from "@/utils/functions/utilsDate";
import { DateCalendar } from "@mui/x-date-pickers";
import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { LoadingIndicator } from "react-select/dist/declarations/src/components/indicators";


const ReserveAppointmentCalendar = () => {

    const appointment = useAppointment();
    const { doctorId, specialityId } = appointment;
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
            payload: dateTemp.toISOString().split("T")[0],
        });
    };

    useEffect(() => {
        const getHighlightedDays = async (doctorId: string, specialityId: string) => {
            try {
                setLoading(true);
                const highlightedDays = await getAvailableDays(doctorId, specialityId);
                if (highlightedDays === null) throw new Error("No hay días disponibles para este doctor");
                setHighlightedDays(dateValuesToDates(highlightedDays.dateArray));
                setError("");
                setLoading(false);
            } catch (error) {
                setHighlightedDays([]);
                setError((error as Error).message);
                setLoading(false);
            }
        }

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
                sx={{
                    width: "100%",
                }}
                value={dateJS}
                onChange={onChangeDate}
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        highlightedDays
                    } as any,
                }}
            />
            {error && <p className="text-brand-600 font-semibold -mt-8 text-center" >{error}</p>}
            {loading && <LoadingHorizontal />}
        </div>
    );
};

export default ReserveAppointmentCalendar;
