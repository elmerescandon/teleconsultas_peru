import React from "react";

type RegisterFieldProps = {
    title: string;
    error: string;
    children: React.ReactNode;
};

const RegisterField = ({ title, children, error }: RegisterFieldProps) => {
    console.log("hello");
    return (
        <div>
            <p className="text-lg">{title}</p>
            {children}
            <p className="text-sm text-rose-600 font-bold">{`*${error}`}</p>
        </div>
    );
};

export default RegisterField;
