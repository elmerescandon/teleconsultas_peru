"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import React from "react";

const LoginForms = () => {
    return (
        <div className="flex flex-col items-center gap-6">
            <InputText placeholder="Usuario o Correo electrónico" />
            <InputText placeholder="Contraseña" />
            <ButtonPrimary onClickFn={() => {}}>Iniciar Sesión</ButtonPrimary>
        </div>
    );
};

export default LoginForms;
