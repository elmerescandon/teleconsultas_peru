import React from "react";

type InputTextProps = {
    placeholder: string;
};

const InputText = ({ placeholder }: InputTextProps) => {
    return (
        <div>
            <input
                type="text"
                className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md h-12 px-4 pr-10 max-xl:w-full"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputText;
