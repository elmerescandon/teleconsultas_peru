"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-mx";
import DoctorRegisterProvider from "@/utils/context/RegisterDoctorContext/RegisterDoctorContext";

type RegisterLayoutProps = {
    children: React.ReactNode;
};

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
            <DoctorRegisterProvider>{children}</DoctorRegisterProvider>
        </LocalizationProvider>
    );
};

export default RegisterLayout;
