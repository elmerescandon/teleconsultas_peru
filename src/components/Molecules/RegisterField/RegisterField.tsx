import React from "react";

type RegisterFieldProps = {
    title: string;
    children: React.ReactNode;
};

const RegisterField = ({ title, children }: RegisterFieldProps) => {
    return (
        <div>
            <p className="text-lg">{title}</p>
            {children}
        </div>
    );
};

export default RegisterField;
