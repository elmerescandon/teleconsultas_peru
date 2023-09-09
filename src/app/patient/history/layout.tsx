"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type HistoryLayoutProps = {
    children: React.ReactNode;
};

const HistoryLayout = ({ children }: HistoryLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    );
};

export default HistoryLayout;
