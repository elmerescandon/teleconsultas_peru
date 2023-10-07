"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LabelProfileMain from "@/components/Atoms/Labels/LabelProfileMain/LabelProfileMain";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const ProfileMain = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { name, lastName, email, id } = userInfo;

    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    return (
        <div className="w-1/3 flex justify-center flex-col items-center gap-10 py-6">
            <div className="flex gap-4 flex-col items-center">
                <Image
                    src="/user-icon.jpg"
                    height={200}
                    width={200}
                    alt="profile-main"
                    className="rounded-full"
                />
                <button className="flex gap-4 items-center -ml-6">
                    <PlusCircleIcon className="h-8 w-8 text-brand-600" />
                    <span className="text-brand-600 text-lg">Cambiar foto</span>
                </button>
            </div>
            <div className="flex flex-col w-full pr-10  max-xl:w-auto max-xl:items-center gap-5">
                <div className="flex justify-start gap-20">
                    <p className="text-lg font-semibold">
                        Información Personal
                    </p>
                    {!isEditingPersonal ? (
                        <button
                            onClick={() => {
                                setIsEditingPersonal(true);
                            }}
                        >
                            <PencilIcon className="h-6 w-6 text-brand-600" />
                        </button>
                    ) : null}
                </div>
                <div className="flex flex-col gap-4 pt-5">
                    <LabelProfileMain
                        label="Nombre(s)"
                        value={name}
                        editable={isEditingPersonal}
                    />
                    <LabelProfileMain
                        editable={isEditingPersonal}
                        label="Apellidos(s)"
                        value={lastName}
                    />
                    <LabelProfileMain
                        editable={isEditingPersonal}
                        label="Correo(s)"
                        value={email}
                    />
                    <LabelProfileMain
                        editable={isEditingPersonal}
                        label="DNI(s)"
                        value={id}
                    />
                </div>
                {isEditingPersonal ? (
                    <ButtonPrimary
                        onClickFn={() => {
                            setIsEditingPersonal(false);
                        }}
                        type="button"
                    >
                        Guardar
                    </ButtonPrimary>
                ) : null}
            </div>
        </div>
    );
};

export default ProfileMain;
