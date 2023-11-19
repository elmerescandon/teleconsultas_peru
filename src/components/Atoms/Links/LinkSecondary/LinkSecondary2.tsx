import Link from "next/link";
import React from "react";

type LinkSecondary2Props = {
    children: React.ReactNode;
    to: string;
};

const LinkSecondary2 = ({ children, to }: LinkSecondary2Props) => {
    return (
        <Link
            className="text-basic-white font-normal text-lg max-lg:text-base"
            href={to}
        >
            {children}
        </Link>
    );
};

export default LinkSecondary2;
