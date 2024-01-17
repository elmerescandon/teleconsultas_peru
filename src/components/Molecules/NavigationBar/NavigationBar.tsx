"use client";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import React from "react";
import NavigationBarPatient from "../NavigationBarPatient/NavigationBarPatient";
import NavigationBarGeneral from "../NavigationBarGeneral/NavigationBarGeneral";
import NavigationBarDoctor from "../NavigationBarDoctor/NavigationBarDoctor";

const NavigationBar = () => {
    const state: IUserState = useAppSelector(
        (state: IState) => state.user as IUserState
    );
    const { logged, userInfo } = state;
    const { role } = userInfo;
    return (
        <div className="flex items-center pl-44 max-xl:pl-0">
            {!logged ? <NavigationBarGeneral /> : null}
            {logged && role === "patient" ? <NavigationBarPatient /> : null}
            {logged && role === "doctor" ? <NavigationBarDoctor /> : null}
        </div>
    );
};

export default NavigationBar;
