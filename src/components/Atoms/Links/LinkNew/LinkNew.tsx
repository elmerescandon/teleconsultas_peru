import React from "react";

type LinkNewProps = {
    children: React.ReactNode;
    to: string;
    newTab?: boolean;
};

const LinkNew = ({ children, to, newTab }: LinkNewProps) => {
    return (
        <a
            href={to}
            target={newTab ? "_blank" : ""}
            className={`text-basic-white bg-brand-600 rounded-lg text-lg font-normal border-2 border-brand-600 py-4 px-10 w-full active:bg-basic-white active:text-brand-600 active:border-2`}
        >
            {children}
        </a>
    );
};

export default LinkNew;
