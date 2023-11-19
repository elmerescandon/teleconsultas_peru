import Link from "next/link";
import React from "react";

type LinkPrimaryProps = {
    children: React.ReactNode;
    to: string;
    type?: string;
    color?: string;
};

const LinkPrimary = ({ children, to, type, color }: LinkPrimaryProps) => {
    let colorValue = "text-basic-white bg-brand-600";
    switch (color) {
        case "normal":
            colorValue = "text-basic-white bg-brand-200";
            break;
        case "psychology":
            colorValue = "text-basic-white bg-salufy-psycho";
            break;
        case "nutrition":
            colorValue = "text-basic-white bg-salufy-nutri";
            break;
        default:
            colorValue = "text-basic-white bg-brand-600";
            break;
    }

    return (
        <Link
            href={to}
            className={`${
                type ? "text-basic-black bg-basic-white" : `${colorValue}`
            } rounded-lg px-6 font-semibold py-4 text-center hover:opacity-80 transition-opacity bg-opacity-80 max-xl:text-sm max-lg:py-3 max-md:text-xs max-md:px-2 max-md:py-2`}
        >
            {children}
        </Link>
    );
};

export default LinkPrimary;
