"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PopUpAddAvailability from "@/components/Atoms/PopUp/PopUpAddAvailability/PopUpAddAvailability";
import PopUpMyAvailability from "@/components/Atoms/PopUp/PopUpMyAvailability/PopUpMyAvailability";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import React, { useEffect, useState } from "react";

const DoctorAvailabilityHours = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { _id, specialities } = userInfo;
    const [showAddAvailability, setShowAddAvailability] =
        useState<boolean>(false);

    const [myAvaialability, setMyAvailability] = useState<boolean>(false);

    useEffect(() => {
        console.log(specialities);
    }, []);
    return (
        <div
            className="flex items-center gap-4
                        max-2xl:w-full
                        max-md:flex-col"
        >
            <ButtonPrimary
                onClickFn={() => {
                    setMyAvailability(true);
                }}
            >
                Ver horario
            </ButtonPrimary>
            <ButtonPrimary
                onClickFn={() => {
                    setShowAddAvailability(true);
                }}
            >
                Agregar horario
            </ButtonPrimary>

            {myAvaialability && (
                <PopUpMyAvailability
                    doctorId={_id}
                    specialityId={specialities ? specialities[0] : ""}
                    onClose={() => {
                        setMyAvailability(false);
                    }}
                />
            )}
            {showAddAvailability && (
                <PopUpAddAvailability
                    specialityId={specialities ? specialities.toString() : ""}
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
