"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import SendLostPassword from "@/firebase/Mail/SendLostPassword";
import Routes from "@/utils/routes/Routes";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ro } from "date-fns/locale";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type LostPasswordProps = {
    email: string;
    setEmail: (email: string) => void;
};

const LostPassword = ({ email, setEmail }: LostPasswordProps) => {
    const search = useSearchParams();
    const roleRedirect = search.get("role");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [isDoctor, setIsDoctor] = useState(false);

    const sendEmail = async () => {
        setLoading(true);
        if (!email) {
            setError("Debes ingresar un correo electrónico");
            setLoading(false);
            return;
        }
        setError("");
        setCorrect(false);
        try {
            await SendLostPassword(email, isDoctor ? "doctor" : "patient");
            setLoading(false);
            setCorrect(true);
        } catch (e) {
            setError((e as Error).message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (roleRedirect === "doctor") {
            setIsDoctor(true);
        }
    }, [roleRedirect]);

    return (
        <div className="w-full flex flex-col gap-2">
            <InputText
                onChangeFn={(email: string) => {
                    setEmail(email);
                }}
                value={email}
                placeholder="Correo electrónico"
            />
            {roleRedirect === null && (
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
            )}
            {error && (
                <p className="text-red-500 font-semibold py-2">{error}</p>
            )}
            {correct && (
                <p className="text-green-500 font-semibold py-2">
                    Se ha enviado un correo electrónico a {email} con
                    instrucciones para recuperar tu contraseña
                </p>
            )}
            <div>
                <ButtonPrimary onClickFn={sendEmail} disabled={loading}>
                    Enviar correo de recuperación
                </ButtonPrimary>
                {loading && <LoadingHorizontal />}
            </div>
        </div>
    );
};

export default LostPassword;
