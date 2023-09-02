"use client";
import React from "react";
import RegisterProvider from "@/utils/context/RegisterContext/RegisterContext";

type RegisterLayoutProps = {
    children: React.ReactNode;
};

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
    return <RegisterProvider>{children}</RegisterProvider>;
};

export default RegisterLayout;
