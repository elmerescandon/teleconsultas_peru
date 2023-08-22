"use client";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import React from "react";

type InputSelectProps = {
    selectId: string;
    options: ISelectOptions[];
    placeholder: string;
    onChange: (selectedValue: string) => void;
};

const InputSelect = ({
    options,
    selectId,
    placeholder,
    onChange,
}: InputSelectProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };
    return (
        <div>
            <select
                id={selectId}
                className="text-neutral-400 focus:text-classic-black border-neutral-300 border-2 rounded-md h-12 px-4 pr-10 max-xl:w-full w-full"
                placeholder={placeholder}
                onChange={handleChange}
            >
                <option defaultValue={""}>{placeholder}</option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default InputSelect;
