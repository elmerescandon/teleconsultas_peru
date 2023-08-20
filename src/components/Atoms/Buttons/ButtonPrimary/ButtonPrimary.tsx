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
            className="text-basic-white bg-brand-600 rounded-lg text-lg font-normal border-2 border-brand-600 py-4 px-10 w-full active:bg-basic-white active:text-brand-600 active:border-2"
            onClick={onClickFn}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
