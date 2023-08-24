"use client";
import { useAppointmentDispatch } from "@/utils/context/AppointmentContext/AppointmentContext";
import { DateCalendar } from "@mui/x-date-pickers";
import React, { useState } from "react";

const ReserveAppointmentCalendar = ({}) => {
    const [dateJS, setDateJS] = useState<IDateJS | null>(null);

    const onChangeDate = (date: IDateJS | null) => {
        if (!date) return;
        let dateTemp = new Date(date);
        setDateJS(date);
        dispatch({
            type: "SET_DATE",
            payload: dateTemp.toISOString().split("T")[0],
        });
    };

    const dispatch = useAppointmentDispatch();
    return (
        <div className="px-5">
            <div className="text-xl font-semibold py-4">
                Calendario Disponible
            </div>
            <DateCalendar value={dateJS} onChange={onChangeDate} />
        </div>
    );
};

export default ReserveAppointmentCalendar;
