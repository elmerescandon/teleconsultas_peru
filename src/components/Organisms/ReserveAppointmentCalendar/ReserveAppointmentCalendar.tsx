"use client";
import { DateCalendar } from "@mui/x-date-pickers";
import React, { useState } from "react";

const ReserveAppointmentCalendar = () => {
    const [value, setValue] = useState(null);
    return (
        <div className="px-5">
            <div className="text-xl font-semibold py-4">
                Calendario Disponible
            </div>
            <DateCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </div>
    );
};

export default ReserveAppointmentCalendar;
