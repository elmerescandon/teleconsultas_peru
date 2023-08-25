"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentProvider from "@/utils/context/AppointmentContext/AppointmentContext";

type ReserveLayoutProps = {
    children: React.ReactNode;
};

const ReserveLayout = ({ children }: ReserveLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppointmentProvider>{children}</AppointmentProvider>
        </LocalizationProvider>
    );
};

export default ReserveLayout;
