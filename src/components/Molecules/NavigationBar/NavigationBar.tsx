"use client";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import NavigationBarPatient from "../NavigationBarPatient/NavigationBarPatient";
import NavigationBarGeneral from "../NavigationBarGeneral/NavigationBarGeneral";
import NavigationBarDoctor from "../NavigationBarDoctor/NavigationBarDoctor";
import { useSession } from "next-auth/react";

const NavigationBar = () => {
    const [loaded, setLoaded] = useState(false);

    const state: IUserState = useAppSelector(
        (state: IState) => state.user as IUserState
    );
    const { logged, userInfo } = state;
    const { role } = userInfo;
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            setLoaded(true);
        } else if (status === "loading") {
            setLoaded(false);
        } else {
            setLoaded(true);
        }
    }, [status]);

    return (
        <div className="flex items-center pl-44 max-xl:pl-0">
            {!loaded && (
                <div className="animate-pulse bg-gray-100 h-14 w-56 rounded-2xl "></div>
            )}
            {loaded && (
                <div>
                    {!logged ? <NavigationBarGeneral /> : null}
                    {logged && role === "patient" ? (
                        <NavigationBarPatient />
                    ) : null}
                    {logged && role === "doctor" ? (
                        <NavigationBarDoctor />
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
