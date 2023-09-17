"use client";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import { hoursOptions } from "@/utils/constants/registerSelect";
import { Switch } from "@mui/material";
import React from "react";

type DayAvailabilityProps = {
    day: string;
};

const DayAvailability = ({ day }: DayAvailabilityProps) => {
    return (
        <div className="flex items-center gap-5 justify-between py-3">
            <Switch />
            <p className="text-lg">{day}</p>
            <div className="flex gap-3 items-center">
                <InputSelect
                    onChange={() => {}}
                    placeholder="Inicio"
                    selectId="inicio-day-availability"
                    options={hoursOptions}
                    key={1}
                    size="small"
                />
                <p className="text-xl">a</p>
                <InputSelect
                    onChange={() => {}}
                    placeholder="Final"
                    selectId="final-day-availability"
                    options={hoursOptions}
                    key={1}
                    size="small"
                />
            </div>
        </div>
    );
};

export default DayAvailability;
