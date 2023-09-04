"use client";
import TimeDisplay from "@/components/Atoms/Time/TimeDisplay";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import Image from "next/image";
import React from "react";

const PatientMain = () => {
    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;
    return (
        <div className="flex justify-between w-full items-center rounded-3xl border-neutral-300 border-2 py-10 px-24 max-xl:px-5 max-xl:flex-col max-xl:gap-5">
            <div className="flex flex-col gap-5">
                <TimeDisplay />
                <p className="text-3xl font-semibold">{`¡Buenos días, ${userInfo.name}!`}</p>
                <p className="text-base font-normal">
                    Tienes 1 cita agendada para hoy
                </p>
            </div>
            <Image
                src="/girl_smiling_v2.jpg"
                height={150}
                width={150}
                alt="telemedicine-profile-person"
                className="rounded-full"
            />
        </div>
    );
};

export default PatientMain;
