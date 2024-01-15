"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import SendLostPassword from "@/firebase/Mail/SendLostPassword";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

const LostPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);

    const sendEmail = async () => {
        if (!email) {
            setError("Debes ingresar un correo electrónico");
            return;
        }
        setError("");
        try {
            await SendLostPassword(email, isDoctor ? "doctor" : "patient");
        } catch (e) {
            setError((e as Error).message);
        }
    };

    return (
        <div className="w-full flex flex-col gap-5">
            <InputText
                onChangeFn={(email: string) => {
                    setEmail(email);
                }}
                value={email}
                placeholder="Correo electrónico"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        checked={isDoctor}
                        onChange={(e) => {
                            setIsDoctor(e.target.checked);
                        }}
                    />
                }
                label="Soy doctor"
            />
            {error && <p className="text-red-500 py-2">{error}</p>}
            <ButtonPrimary onClickFn={sendEmail}>
                Enviar correo de recuperación
            </ButtonPrimary>
        </div>
    );
};

export default LostPassword;
