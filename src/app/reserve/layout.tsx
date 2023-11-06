"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentProvider from "@/utils/context/AppointmentContext/AppointmentContext";
import "dayjs/locale/es-mx";

type ReserveLayoutProps = {
    children: React.ReactNode;
};

const ReserveLayout = ({ children }: ReserveLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
            <AppointmentProvider>{children}</AppointmentProvider>
        </LocalizationProvider>
    );
};

export default ReserveLayout;
