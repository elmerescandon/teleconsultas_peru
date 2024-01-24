"use client";
import React from "react";
import RegisterProvider from "@/utils/context/RegisterContext/RegisterContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-mx";

type RegisterLayoutProps = {
    children: React.ReactNode;
};

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
            <RegisterProvider>{children}</RegisterProvider>
        </LocalizationProvider>
    );
};

export default RegisterLayout;
