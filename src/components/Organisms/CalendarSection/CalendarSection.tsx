"use client";
import MonthGrid from "@/components/Molecules/MonthGrid/MonthGrid";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import useMonthYearChange from "@/utils/hooks/useCalendar";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const CalendarSection = () => {
    const monthToMonthName = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const { month, year, goToPreviousMonth, goToNextMonth } =
        useMonthYearChange(new Date().getMonth(), new Date().getFullYear());

    const state: IUserState = useAppSelector((state) => state.user);
    const [patientAppointments, setPatientAppointments] = useState<
        IAppointment[]
    >([]);
    const { userInfo } = state;

    useEffect(() => {
        const getAppointments = async () => {
            if (!userInfo) return;
            const appointments = await getUserAppointments(
                userInfo._id,
                "pending"
            );
            setPatientAppointments(appointments);
        };
        getAppointments();
    }, []);

    return (
        <div className="max-lg:pt-36">
            <h1 className="text-3xl pb-3 font-bold">Mis citas</h1>
            <div className="flex gap-4 items-center justify-end">
                <button onClick={goToPreviousMonth}>
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div className="px-4 w-32">
                    <h2 className="text-xl">{monthToMonthName[month]}</h2>
                    <h2 className="text-lg font-normal text-neutral-500">
                        {year}
                    </h2>
                </div>
                <button onClick={goToNextMonth}>
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </div>

            <MonthGrid
                monthAppointmentData={patientAppointments}
                onAppointmentClick={() => {}}
                month={month}
                year={year}
            />
        </div>
    );
};

export default CalendarSection;
