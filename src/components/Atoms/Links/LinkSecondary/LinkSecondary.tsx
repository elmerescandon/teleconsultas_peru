import Link from "next/link";
import React from "react";

type LinkSecondaryProps = {
    children: React.ReactNode;
    to: string;
};

const LinkSecondary = ({ children, to }: LinkSecondaryProps) => {
    return (
        <Link
            className="text-brand-600 bg-classic-white rounded-lg p-2 text-base font-semibold
       flex justify-between"
            href={to}
        >
            {children}
        </Link>
    );
};

export default LinkSecondary;
