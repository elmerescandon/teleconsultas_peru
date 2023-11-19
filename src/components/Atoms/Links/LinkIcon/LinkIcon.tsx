import React from "react";

type LinkIconProps = {
    children: React.ReactNode;
    to: string;
};

const LinkIcon = ({ children, to }: LinkIconProps) => {
    return (
        <a href={to} target="_blank">
            {children}
        </a>
    );
};

export default LinkIcon;
