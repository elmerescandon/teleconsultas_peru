"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PopUpAddAvailability from "@/components/Atoms/PopUp/PopUpAddAvailability/PopUpAddAvailability";
import DayAvailability from "@/components/Molecules/DayAvailability/DayAvailability";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import React, { useState } from "react";

const DoctorAvailabilityHours = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { _id } = userInfo;
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
            {showAddAvailability && (
                <PopUpAddAvailability
                    onClose={() => {
                        setShowAddAvailability(false);
                    }}
                    doctorId={_id}
                />
            )}
        </div>
    );
};

export default DoctorAvailabilityHours;
