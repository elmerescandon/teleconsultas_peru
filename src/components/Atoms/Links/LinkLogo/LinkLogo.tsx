import Link from "next/link";
import React from "react";

type LinkLogoProps = {
    size?: string;
};

const LinkLogo = ({ size }: LinkLogoProps) => {
    return (
        <Link
            href={"/"}
            className={`${
                size === "big" ? "text-5xl" : "text-2xl"
            } font-semibold `}
        >
            Aika Salud
        </Link>
    );
};

export default LinkLogo;
