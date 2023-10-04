"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LabelProfileMain from "@/components/Atoms/Labels/LabelProfileMain/LabelProfileMain";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { currentUbigeo } from "@/utils/constants/registerSelect";
import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const ProfileDetailed = () => {
    const user: IUserState = useAppSelector((state) => state.user);
    const { userInfo } = user;
    const { region, province, district, address, phone, age, bornDate, sex } =
        userInfo;
    const [isEditingAdditional, setIsEditingAdditional] = useState(false);

    return (
        <div className="h-2/3 pt-16 flex flex-col gap-7">
            <div className="flex w-full justify-start gap-10 items-center">
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
                        <PencilIcon className="h-6 w-6 text-brand-600" />
                    </button>
                )}
            </div>
            <div className="flex flex-row max-xl:flex-col gap-5">
                <div className="w-1/2 flex flex-col justify-around">
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
                <div className="w-1/2 flex flex-col justify-around gap-10">
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
                        value={bornDate ? bornDate : ""}
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Sexo"
                        value={sex ? sex : ""}
                        editable={isEditingAdditional}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailed;
