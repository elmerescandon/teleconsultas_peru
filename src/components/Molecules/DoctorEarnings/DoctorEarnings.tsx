"use client";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import React from "react";

const DoctorEarnings = () => {
    //  TODO: Complete Earnings date
    const user: IUserState = useAppSelector((state) => state.user);
    const { ingresos } = user.userInfo;

    return (
        <div>
            <div className="text-2xl font-semibold pb-5">Ganancias</div>
            <div className="flex gap-32 rounded-2xl bg-neutral-100 p-8 pb-10">
                <div className="flex flex-col gap-4">
                    <div className="text-xl">Mensual</div>
                    <div className="text-4xl font-semibold">{`S/.1000`}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-xl">Diaria</div>
                    <div className="text-4xl font-semibold">{`S/100`}</div>
                </div>
            </div>
        </div>
    );
};

export default DoctorEarnings;
