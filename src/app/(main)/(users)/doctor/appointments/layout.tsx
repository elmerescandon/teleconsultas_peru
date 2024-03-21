"use client";
import React from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-mx";
`
`;
type DoctorAppointmentLayoutProps = {
  children: React.ReactNode;
};

const DoctorAppointmentLayout = ({children}: DoctorAppointmentLayoutProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      {children}
    </LocalizationProvider>
  );
};

export default DoctorAppointmentLayout;
