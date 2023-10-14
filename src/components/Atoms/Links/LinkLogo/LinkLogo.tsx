import Image from "next/image";
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
            <Image
                src="/LOGO_SALUFY.png"
                width={size === "big" ? 300 : 150}
                height={size === "big" ? 300 : 150}
                alt="salufy-logo"
            />
        </Link>
    );
};

export default LinkLogo;
