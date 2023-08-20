"use client";
import MonthGrid from "@/components/Molecules/MonthGrid/MonthGrid";
import useMonthYearChange from "@/utils/hooks/useCalendar";
import AppointmentTest from "@/utils/mockups/AppointmentsTest";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const CalendarSection = () => {
    const monthToMonthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const { month, year, goToPreviousMonth, goToNextMonth } =
        useMonthYearChange(new Date().getMonth(), new Date().getFullYear());
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
                monthAppointmentData={AppointmentTest}
                onAppointmentClick={() => {}}
                month={month}
                year={year}
            />
        </div>
    );
};

export default CalendarSection;
