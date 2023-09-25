import Link from "next/link";
import React from "react";

type LinkPrimaryProps = {
    children: React.ReactNode;
    to: string;
    type?: string;
};

const LinkPrimary = ({ children, to, type }: LinkPrimaryProps) => {
    return (
        <Link
            href={to}
            className={`${
                type
                    ? "text-basic-black bg-basic-white"
                    : "text-basic-white bg-brand-600"
            } rounded-lg px-6 text-md font-normal py-4 text-center w-full`}
        >
            {children}
        </Link>
    );
};

export default LinkPrimary;
