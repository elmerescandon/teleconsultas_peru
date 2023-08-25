"use client";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import React from "react";

const page = () => {
    const appointment = useAppointment();
    return (
        <div>
            <h1>Payment Page</h1>
            <p>{appointment.doctorId}</p>
        </div>
    );
};

export default page;
