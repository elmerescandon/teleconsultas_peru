"use client";
import PatientAppointments from "@/components/Organisms/PatientAppointments/PatientAppointments";
import PatientHistory from "@/components/Organisms/PatientHistory/PatientHistory";
import PatientMain from "@/components/Organisms/PatientMain/PatientMain";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import React from "react";

const PatientHome = () => {
    const state: IUserState = useAppSelector(
        (state: IState) => state.user as IUserState
    );

    return (
        <div className="flex flex-col items-center px-48 h-full pb-5 max-lg:pt-36 gap-5 max-xl:px-5">
            <PatientMain />
            <div className="flex gap-5 w-full max-xl:flex-col">
                <PatientHistory />
                <PatientAppointments />
            </div>
        </div>
    );
};

export default PatientHome;
