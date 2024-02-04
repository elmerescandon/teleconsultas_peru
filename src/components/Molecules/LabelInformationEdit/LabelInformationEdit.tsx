"use client";
import ButtonPrimary2 from "@/components/Atoms/Buttons/ButtonPrimary2/ButtonPrimary2";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type LabelInformationEditProps = {
    label: string;
    value: string | undefined;
    setValue: (value: string) => void;
};

const LabelInformationEdit = ({
    label,
    value,
    setValue,
}: LabelInformationEditProps) => {
    const [newValue, setNewValue] = useState<string>("");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    return (
        <div>
            {value !== undefined ? (
                <div className="flex justify-start flex-col gap-2 pb-4">
                    <div className="flex gap-2 justify-start items-center w-full">
                        <p
                            className={`text-lg text-gray-500`}
                        >
                            {label}
                        </p>
                        {!isEditing ? (
                            <button
                                onClick={() => {
                                    setIsEditing(true);
                                }}
                            >
                                <PencilSquareIcon className="h-5 w-5" />
                            </button>
                        ) : null}
                    </div>

                    <div className="flex gap-3 w-full flex-col items-start">
                        {!isEditing ? (
                            <p
                                className="text-lg text-left w-full"
                            >
                                {value !== "" ? value : "-"}
                            </p>
                        ) : (
                            <InputTextArea
                                placeholder={"Ingresa el resumen del paciente"}
                                onChange={(value: string) => {
                                    setNewValue(value);
                                }}
                                cols={30}
                                rows={4}
                            />
                        )}

                        <div className="flex">
                            {!isEditing ? null : (
                                <button
                                    onClick={() => {
                                        setIsEditing(false);
                                        setValue(newValue);
                                    }}
                                    className="text-basic-white rounded-xl bg-slate-500 px-2 py-1 active:bg-slate-600 hover:bg-slate-400"
                                >
                                    Actualizar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <ButtonPrimary2
                    onClickFn={() => {
                        setValue("");
                    }}
                >{`Agregar ${label}`}</ButtonPrimary2>
            )}
        </div>
    );
};

export default LabelInformationEdit;
