import React from "react";

type RegisterFieldProps = {
    title: string;
    error: string;
    children: React.ReactNode;
};

const RegisterField = ({ title, children, error }: RegisterFieldProps) => {
    return (
        <div>
            <p className="text-lg">{title}</p>
            {children}
            <p>{error}</p>
        </div>
    );
};

export default RegisterField;
