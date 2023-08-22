"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type ReserveLayoutProps = {
    children: React.ReactNode;
};

const ReserveLayout = ({ children }: ReserveLayoutProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    );
};

export default ReserveLayout;
