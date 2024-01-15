"use client";
import LoginProfilePicture from "@/components/Molecules/LoginProfilePicture/LoginProfilePicture";
import getAppointmentCount from "@/firebase/Appointments/getAppointmentCount";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import { set } from "lodash";
import React, { useEffect, useState } from "react";

const PatientMain = () => {
    const [appointmentCount, setAppointmentCount] = useState<number>(0);
    const user: IUserState = useAppSelector((state: IState) => state.user);
    const { userInfo } = user;
    const { _id, role } = userInfo;

    useEffect(() => {
        const getCount = async (
            _id: string,
            role: string,
            status: string[]
        ) => {
            if (_id === "") return;

            try {
                const count = await getAppointmentCount(_id, role, status);
                setAppointmentCount(count);
            } catch (err) {
                setAppointmentCount(0);
                // console.log(err);
            }
        };
        getCount(_id, role, ["pending", "accepted"]);
    }, [_id]);
    return (
        <div className="flex justify-between w-full items-center rounded-3xl border-neutral-300 border-2 py-10 px-24 max-xl:px-5 max-xl:flex-col max-xl:gap-5">
            <div className="flex flex-col gap-5">
                <p className="text-3xl font-semibold">{`¡Buenos días, ${userInfo.name}!`}</p>
                <p className="text-base font-normal">
                    {`Tienes ${appointmentCount} cita agendadas, revisa tu calendario.`}
                </p>
            </div>
            <LoginProfilePicture size="main" />
        </div>
    );
};

export default PatientMain;
