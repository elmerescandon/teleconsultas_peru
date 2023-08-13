"use client";
import React from "react";

type ButtonPrimaryProps = {
    children: React.ReactNode;
    onClickFn: () => void;
};

const ButtonPrimary = ({ children, onClickFn }: ButtonPrimaryProps) => {
    return (
        <div>
            <button
                className="text-basic-white bg-brand-600 rounded-lg text-md font-normal py-4 px-10"
                onChange={onClickFn}
            >
                {children}
            </button>
        </div>
    );
};

export default ButtonPrimary;
