"use client";
import React from "react";

type ButtonPrimary2Props = {
    children: React.ReactNode;
    onClickFn: () => void;
    type?: string;
    selected?: boolean;
};

const ButtonPrimary2 = ({
    children,
    onClickFn,
    selected,
}: ButtonPrimary2Props) => {
    return (
        <button
            className={`text-basic-white bg-brand-600 rounded-md text-lg font-normal border-2 border-brand-600 py-2 px-5  
            ${selected ? "bg-white text-salufy-blue" : ""}
            active:bg-basic-white active:text-brand-600 active:border-2`}
            onClick={onClickFn}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary2;
