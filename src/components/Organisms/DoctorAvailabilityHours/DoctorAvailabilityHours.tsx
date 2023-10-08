"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PopUpAddAvailability from "@/components/Atoms/PopUp/PopUpAddAvailability/PopUpAddAvailability";
import DayAvailability from "@/components/Molecules/DayAvailability/DayAvailability";
import React, { useState } from "react";

const DoctorAvailabilityHours = () => {
    const [showAddAvailability, setShowAddAvailability] =
        useState<boolean>(false);
    return (
        <div className="flex flex-col items-center gap-1">
            <ButtonPrimary
                onClickFn={() => {
                    setShowAddAvailability(true);
                }}
            >
                Agregar disponibilidad
            </ButtonPrimary>
            <div className="flex items-center gap-5">
                <div>
                    <DayAvailability day="Lunes" />
                    <DayAvailability day="Martes" />
                    <DayAvailability day="Miercoles" />
                </div>
                <div>
                    <DayAvailability day="Jueves" />
                    <DayAvailability day="Viernes" />
                    <DayAvailability day="Sábado" />
                </div>
            </div>
            {showAddAvailability && <PopUpAddAvailability />}
        </div>
    );
};

export default DoctorAvailabilityHours;
