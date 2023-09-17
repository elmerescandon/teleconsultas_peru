"use client";
import InputTextArea from "@/components/Atoms/Inputs/InputTextArea/InputTextArea";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type LabelInformationEditProps = {
    label: string;
    value: string;
    setValue: (value: string) => void;
};

const LabelInformationEdit = ({
    label,
    value,
    setValue,
}: LabelInformationEditProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    return (
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
                            setValue(value);
                        }}
                        message={value}
                        cols={30}
                        rows={4}
                    />
                )}

                <div className="flex">
                    {!isEditing ? null : (
                        <button
                            onClick={() => {
                                setIsEditing(false);
                            }}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LabelInformationEdit;
