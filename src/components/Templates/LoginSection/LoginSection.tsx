import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LoginForms from "@/components/Organisms/LoginForms/LoginForms";
import LoginOptions from "@/components/Organisms/LoginOptions/LoginOptions";
import React from "react";

const LoginSection = () => {
    return (
        <div className="flex flex-col gap-12 justify-center w-1/4 h-full m-auto max-xl:w-full ">
            <div className="flex flex-col text-center items-center w-full gap-3">
                <LinkLogo size="big" />
                <div className="text-lg font-normal">
                    Conectando pacientes y doctores para una atención médica
                    personalizada en línea
                </div>
            </div>
            <LoginForms />
            <LoginOptions />
        </div>
    );
};

export default LoginSection;
