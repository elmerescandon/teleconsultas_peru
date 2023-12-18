import React from "react";

type RegisterFieldProps = {
    title: string;
    error: string;
    children: React.ReactNode;
    horizontal?: boolean;
};

const RegisterField = ({
    title,
    children,
    error,
    horizontal,
}: RegisterFieldProps) => {
    return (
        <div className={`${horizontal ? "flex items-center" : ""}`}>
            <p className="text-lg">{title}</p>
            {children}
            <p className="text-sm text-rose-600 font-bold">
                {error ? `*${error}` : null}
            </p>
        </div>
    );
};

export default RegisterField;
