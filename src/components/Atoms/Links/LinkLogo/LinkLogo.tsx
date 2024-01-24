"use client";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinkLogoProps = {
    size?: string;
};

const LinkLogo = ({ size }: LinkLogoProps) => {
    const state: IUserState = useAppSelector(
        (state: IState) => state.user as IUserState
    );
    const { logged, userInfo } = state;
    const { role } = userInfo;

    return (
        <Link
            href={`${
                logged && role === "patient"
                    ? Routes.PATIENT_HOME
                    : logged && role === "doctor"
                    ? Routes.DOCTOR_HOME
                    : Routes.HOME
            }`}
            className={`${
                size === "big" ? "text-5xl" : "text-2xl"
            } font-semibold `}
        >
            <Image
                src="/LOGO_SALUFY.png"
                width={size === "big" ? 300 : 100}
                height={size === "big" ? 300 : 100}
                alt="salufy-logo"
            />
        </Link>
    );
};

export default LinkLogo;
