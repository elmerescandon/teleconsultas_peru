"use client";
import React, { useState, useEffect } from "react";

const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    const locale: string = "es-ES";
    return new Intl.DateTimeFormat(locale, options).format(date);
};

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute (60,000 milliseconds)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <p className="text-sm font-normal">{formatDate(currentTime)}</p>;
};

export default TimeDisplay;
