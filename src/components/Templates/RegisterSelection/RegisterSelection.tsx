import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import RegisterProfiles from "@/components/Organisms/RegisterProfiles/RegisterProfiles";
import React from "react";

const RegisterSelection = () => {
    return (
        <div className="flex flex-col gap-12 justify-center w-1/4 h-full m-auto max-xl:w-full max-xl:px-5 max-xl:py-28">
            <div className="flex flex-col text-center items-center w-full gap-3">
                <LinkLogo size="big" />
                <p className="text-brand-500 text-5xl font-semibold py-5">
                    Registra tu perfil
                </p>
            </div>
            <RegisterProfiles />
        </div>
    );
};

export default RegisterSelection;
