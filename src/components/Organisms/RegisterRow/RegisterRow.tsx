import React from "react";

type RegisterRowProps = {
    children: React.ReactNode;
};

const RegisterRow = ({ children }: RegisterRowProps) => {
    return <div className="w-full px-10 flex flex-col gap-5">{children}</div>;
};

export default RegisterRow;
