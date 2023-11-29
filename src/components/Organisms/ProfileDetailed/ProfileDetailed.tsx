"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LabelProfileMain from "@/components/Atoms/Labels/LabelProfileMain/LabelProfileMain";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { currentUbigeo } from "@/utils/constants/registerSelect";
import { stringToDate } from "@/utils/functions/utils";
import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ProfileDetailed = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { region, province, district, address, phone, age, bornDate, sex } =
        userInfo;
    const [isEditingAdditional, setIsEditingAdditional] = useState(false);

    return (
        <div
            className="pt-10 flex flex-col gap-3 
                        max-2xl:h-full max-2xl:w-full max-2xl:gap-7"
        >
            <div className="flex w-full justify-start gap-4 items-center">
                <div className="text-xl font-semibold">
                    Información Adicional
                </div>
                {isEditingAdditional ? (
                    <div className="w-36">
                        <ButtonPrimary
                            type="button"
                            onClickFn={() => {
                                setIsEditingAdditional(false);
                            }}
                        >
                            Guardar
                        </ButtonPrimary>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            setIsEditingAdditional(true);
                        }}
                    >
                        <PencilIcon className="h-5 w-5 text-brand-600" />
                    </button>
                )}
            </div>
            <div
                className="flex flex-row gap-5
                            max-2xl:w-full
                            max-md:flex-col max-md:gap-7"
            >
                <div
                    className="w-1/2 flex flex-col justify-start gap-5
                                max-md:w-full max-md:gap-7"
                >
                    <LabelProfileMain
                        label="Región"
                        value={
                            currentUbigeo.find(
                                (item) =>
                                    item.departamento === region &&
                                    item.provincia === "00" &&
                                    item.distrito === "00"
                            )?.nombre || ""
                        }
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Provincia"
                        value={
                            currentUbigeo.find(
                                (item) =>
                                    item.departamento === region &&
                                    item.provincia === province &&
                                    item.distrito === "00"
                            )?.nombre || ""
                        }
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Distrito"
                        value={
                            currentUbigeo.find(
                                (item) =>
                                    item.departamento === region &&
                                    item.provincia === province &&
                                    item.distrito === district
                            )?.nombre || ""
                        }
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Dirección"
                        value={address}
                        editable={isEditingAdditional}
                    />
                </div>
                <div
                    className="w-1/2 flex flex-col justify-start gap-5
                                max-md:w-full max-md:gap-7"
                >
                    <LabelProfileMain
                        label="Teléfono"
                        value={phone}
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Edad"
                        value={age ? age : ""}
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Nacimiento"
                        value={
                            bornDate
                                ? new Date(bornDate).toISOString().split("T")[0]
                                : ""
                        }
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Sexo"
                        value={
                            sex ? (sex == "M" ? "Masculino" : "Femenino") : ""
                        }
                        editable={isEditingAdditional}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailed;
