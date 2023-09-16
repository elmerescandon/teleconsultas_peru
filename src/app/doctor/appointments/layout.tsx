"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type DoctorAppointmentLayoutProps = {
    children: React.ReactNode;
};

const DoctorAppointmentLayout = ({
    children,
}: DoctorAppointmentLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    );
};

export default DoctorAppointmentLayout;
