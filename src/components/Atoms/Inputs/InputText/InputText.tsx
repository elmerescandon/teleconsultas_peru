import React from "react";

type InputTextProps = {
    placeholder: string;
    type?: string;
    size?: string;
};

const InputText = ({ placeholder, type }: InputTextProps) => {
    return (
        <input
            type={type ? type : "text"}
            className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md w-full 
                py-3 px-4 pr-10 max-xl:w-full focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
            placeholder={placeholder}
        />
    );
};

export default InputText;
