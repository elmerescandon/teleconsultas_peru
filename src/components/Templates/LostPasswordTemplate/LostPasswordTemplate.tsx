"use client";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import LostPassword from "@/components/Organisms/LostPassword/LostPassword";
import LostPasswordChange from "@/components/Organisms/LostPasswordChange/LostPasswordChange";
import LostPasswordCode from "@/components/Organisms/LostPasswordCode/LostPasswordCode";
import Routes from "@/utils/routes/Routes";
import React, { useState } from "react";

const LostPasswordTemplate = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [state, setState] = useState<"email" | "reset">("email");
    const [id, setId] = useState("");

    const beginPasswordUpdate = (id: string) => {
        setState("reset");
        setId(id);
    };

    return (
        <div className="m-auto w-1/2 flex flex-col items-center gap-5 max-xl:w-full max-xl:px-10 ">
            <LinkLogo size="big" />
            <LinkPrimary to={Routes.LOGIN}>Regresar a Iniciar Sesión</LinkPrimary>
            {state === "email" && (
                <div className="flex flex-col gap-5 items-center">
                    <div className="text-center">
                        <h1 className="text-brand-900 font-semibold text-3xl">
                            ¿Olvidaste tu contraseña?
                        </h1>
                        <h3 className="text-basic-black font-normal text-xl">
                            Ingresa tu correo electrónico y sigue las
                            instrucciones para ingresar una nueva contraseña.
                        </h3>
                    </div>
                    <LostPassword email={email} setEmail={setEmail} />
                    <LostPasswordCode
                        code={code}
                        setCode={setCode}
                        beginPasswordUpdate={beginPasswordUpdate}
                    />
                </div>
            )}
            {state === "reset" && id !== "" && (
                <LostPasswordChange code={code} id={id} />
            )}
        </div>
    );
};

export default LostPasswordTemplate;
