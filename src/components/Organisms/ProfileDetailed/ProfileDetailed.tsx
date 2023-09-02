"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LabelProfileMain from "@/components/Atoms/Labels/LabelProfileMain/LabelProfileMain";
import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ProfileDetailed = () => {
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
                        value="Lima"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Provincia"
                        value="Lima"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Distrito"
                        value="Miraflores"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Dirección"
                        value="Av. Larco 156"
                        editable={isEditingAdditional}
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-around gap-10">
                    <LabelProfileMain
                        label="Teléfono"
                        value="+51 942 235 231"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Edad"
                        value="51"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Nacimiento"
                        value="15/08/1973"
                        editable={isEditingAdditional}
                    />
                    <LabelProfileMain
                        label="Sexo"
                        value="Hombre"
                        editable={isEditingAdditional}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailed;
