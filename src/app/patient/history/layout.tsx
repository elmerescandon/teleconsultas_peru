"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-mx";

type HistoryLayoutProps = {
    children: React.ReactNode;
};

const HistoryLayout = ({ children }: HistoryLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
            {children}
        </LocalizationProvider>
    );
};

export default HistoryLayout;
