"use client";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import React, { useState, useEffect } from "react";

type InputSelectSmallProps = {
    selectId: string;
    options: ISelectOptions[];
    placeholder: string;
    onChange: (selectedValue: string) => void;
    fistValue?: string;
};

const InputSelectSmall = ({
    options,
    selectId,
    placeholder,
    onChange,
    fistValue,
}: InputSelectSmallProps) => {
    const [selectedValue, setSelectedValue] = useState<string>(fistValue || "");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onChange(newValue);
    };
    useEffect(() => {
        console.log(selectedValue);
        if (selectedValue === "" && options.length > 0) {
            setSelectedValue(""); // Set the first option as selected initially
        }
    }, [options, selectedValue]);

    return (
        <div>
            <select
                id={selectId}
                className={` ${
                    selectedValue === ""
                        ? "text-neutral-500"
                        : "text-basic-black"
                } focus:text-classic-black border-neutral-300 border-2 rounded-md h-8 px-4 pr-10 max-xl:w-full w-full }`}
                onChange={handleChange}
                value={selectedValue}
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelectSmall;
