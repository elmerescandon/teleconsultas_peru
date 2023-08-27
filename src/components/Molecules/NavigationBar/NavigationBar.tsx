"use client";
import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NavigationBar = () => {
    const state = useAppSelector((state: IState) => state.user as IUserState);
    const { logged } = state;
    console.log(state);
    console.log(logged);
    return (
        <div className="flex items-center">
            {logged ? (
                <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4">
                    <LinkSecondary to={Routes.PATIENT_HOME}>
                        {"Inicio"}
                    </LinkSecondary>
                    <LinkSecondary to={Routes.RESERVE}>
                        {"Reserva"}
                    </LinkSecondary>
                    <LinkSecondary to={Routes.PATIENT_APPOINTMENTS}>
                        {"Citas"}
                    </LinkSecondary>
                </div>
            ) : (
                <div className="navigation-bar flex flex-row items-center gap-7 max-xl:gap-4 ">
                    <LinkSecondary to={Routes.RESERVE}>
                        {"¡Reserva tu cita!"}
                    </LinkSecondary>
                    <LinkSecondary to={Routes.PATIENTS}>
                        {"Pacientes"}
                    </LinkSecondary>
                    <LinkSecondary to={Routes.DOCTORS}>
                        {"Doctores"}
                    </LinkSecondary>
                    <LinkSecondary to={Routes.ESPECIALITY}>
                        {"Especialidades"}
                    </LinkSecondary>
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
