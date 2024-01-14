"use client";
import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkSecondary from "@/components/Atoms/Links/LinkSecondary/LinkSecondary";
import LoginForms from "@/components/Organisms/LoginForms/LoginForms";
import LoginOptions from "@/components/Organisms/LoginOptions/LoginOptions";
import Routes from "@/utils/routes/Routes";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import React from "react";

type LoginSectionProps = {
    role: string;
    label: string;
};

const LoginSection = ({ role, label }: LoginSectionProps) => {
    const params = useSearchParams();
    const loginStatus = params.get("signin");
    return (
        <div className="flex flex-col gap-12 justify-center w-1/3 h-full m-auto max-xl:w-full max-xl:px-5 max-xl:py-28">
            <div className="flex flex-col text-center items-center w-full gap-3">
                <LinkLogo size="big" />
            </div>
            <p className="text-center text-3xl font-semibold text-brand-900">
                {label}
            </p>
            {loginStatus === "failed" && (
                <div className="flex gap-5 text-center text-red-500 p-5 bg-red-200 border-red-500 border-2 rounded-3xl items-center justify-center">
                    <BellAlertIcon className="w-5 h-5 inline-block" />
                    <p>
                        La cuenta de Google no está conectada a Salufy, por
                        favor regístrese.
                    </p>
                </div>
            )}

            <LoginForms role={role} />
            <LinkSecondary to={Routes.LOST_PASSWORD}>
                ¿Olvidaste tu contraseña? Haz click aquí
            </LinkSecondary>
            <LoginOptions role={role} />
        </div>
    );
};

export default LoginSection;
