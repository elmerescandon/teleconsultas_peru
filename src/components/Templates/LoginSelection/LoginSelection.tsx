import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LoginProfiles from "@/components/Organisms/LoginProfiles/LoginProfiles";
import React from "react";

const LoginSelection = () => {
    return (
        <div className="flex flex-col gap-12 justify-center w-1/4 h-full m-auto max-xl:w-full max-xl:px-5 max-xl:py-28">
            <div className="flex flex-col text-center items-center w-full gap-3">
                <LinkLogo size="big" />
            </div>
            <LoginProfiles />
            {/* <LoginForms /> */}
            {/* <LoginOptions /> */}
        </div>
    );
};

export default LoginSelection;
