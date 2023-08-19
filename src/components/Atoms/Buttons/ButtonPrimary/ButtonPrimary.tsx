"use client";
import React from "react";

type ButtonPrimaryProps = {
    children: React.ReactNode;
    onClickFn: () => void;
    type?: string;
};

const ButtonPrimary = ({ children, onClickFn }: ButtonPrimaryProps) => {
    return (
        <button
            className="text-basic-white bg-brand-600 rounded-lg text-lg font-normal py-4 px-10 w-full"
            onChange={onClickFn}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
