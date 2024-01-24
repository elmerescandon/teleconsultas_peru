"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-mx";
import React from "react";

type RegisterLayoutProps = {
    children: React.ReactNode;
};

const DoctorProfileLayout = ({ children }: RegisterLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
            {children}
        </LocalizationProvider>
    );
};

export default DoctorProfileLayout;
