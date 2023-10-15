import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LoginForms from "@/components/Organisms/LoginForms/LoginForms";
import LoginOptions from "@/components/Organisms/LoginOptions/LoginOptions";
import React from "react";

type LoginSectionProps = {
    type: string;
};

const LoginSection = ({ type }: LoginSectionProps) => {
    return (
        <div className="flex flex-col gap-12 justify-center w-1/3 h-full m-auto max-xl:w-full max-xl:px-5 max-xl:py-28">
            <div className="flex flex-col text-center items-center w-full gap-3">
                <LinkLogo size="big" />
            </div>
            <p className="text-center text-3xl font-semibold text-brand-900">
                {type}
            </p>
            <LoginForms />
            <LoginOptions />
        </div>
    );
};

export default LoginSection;
