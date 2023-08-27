"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import useUserValidation from "@/utils/hooks/useAuth";
import React, { useState } from "react";

const LoginForms = () => {
    const { validateUser } = useUserValidation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            await validateUser(username, password);
            setError("");
            console.log("SE LOGRO");
            // Continue with further actions, such as registering the user
        } catch (error: any) {
            setError(error.message);
            console.log("No se logr");
        }
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <InputText
                placeholder="Usuario o Correo electrónico"
                value={username}
                onChangeFn={setUsername}
            />
            <InputText
                placeholder="Contraseña"
                value={password}
                onChangeFn={setPassword}
            />
            <ButtonPrimary onClickFn={handleSubmit}>
                Iniciar Sesión
            </ButtonPrimary>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default LoginForms;
