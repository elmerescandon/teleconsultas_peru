import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import React from "react";

type InputSelectProps = {
    selectId: string;
    options: ISelectOptions[];
    placeholder: string;
};

const InputSelect = ({ options, selectId, placeholder }: InputSelectProps) => {
    return (
        <div>
            <select
                id={selectId}
                className="text-neutral-400 focus:text-classic-black border-neutral-300 border-2 rounded-md h-12 px-4 pr-10 max-xl:w-full w-full"
                placeholder={placeholder}
            >
                <option defaultValue={""}>{placeholder}</option>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default InputSelect;
