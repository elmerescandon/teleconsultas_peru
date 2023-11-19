"use client";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import React, { useState, useEffect } from "react";

type InputSelectProps = {
    selectId: string;
    options: ISelectOptions[];
    placeholder: string;
    onChange: (selectedValue: string) => void;
    size?: "small" | "medium" | "large";
    fistValue?: string;
};

const InputSelect = ({
    options,
    selectId,
    placeholder,
    onChange,
    size,
    fistValue,
}: InputSelectProps) => {
    const [selectedValue, setSelectedValue] = useState<string>(fistValue || "");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onChange(newValue);
    };
    useEffect(() => {
        if (selectedValue === "" && options.length > 0) {
            setSelectedValue(""); // Set the first option as selected initially
        }
    }, [options, selectedValue]);

    return (
        <div>
            <select
                id={selectId}
                className={`text-basic-black focus:text-classic-black border-neutral-300 border-2 rounded-md ${
                    size === "small" ? "h-10" : "h-14"
                } px-4 pr-10 max-xl:w-full`}
                onChange={handleChange}
                value={selectedValue}
            >
                <option value="" className="text-neutral-400 ">
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelect;
