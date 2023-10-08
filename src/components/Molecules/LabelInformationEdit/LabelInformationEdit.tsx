"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
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
                <div className="flex justify-start max-xl:flex-col gap-5 py-8 max-xl:py-3">
                    <div className="flex gap-4 items-center">
                        <p
                            className={`text-lg text-gray-500 ${
                                isEditing ? "w-1/4" : "w-full"
                            } max-xl:w-full`}
                        >
                            {label}
                        </p>
                        {!isEditing ? (
                            <button
                                onClick={() => {
                                    setIsEditing(true);
                                }}
                            >
                                <PencilIcon className="h-5 w-5 text-gray-500" />
                            </button>
                        ) : null}
                    </div>

                    <div className="flex gap-3 w-full flex-col items-end">
                        {!isEditing ? (
                            <p className="text-lg text-right w-full">
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
                                >
                                    <CheckIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <ButtonPrimary
                        onClickFn={() => {
                            setValue("");
                        }}
                    >{`Agregar ${label}`}</ButtonPrimary>
                </div>
            )}
        </div>
    );
};

export default LabelInformationEdit;
