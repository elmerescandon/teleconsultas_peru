import Routes from "@/utils/routes/Routes";
import Link from "next/link";
import React from "react";

const LoginProfiles = () => {
    return (
        <div
            className="flex gap-5 justify-between
                        max-xl:flex-col max-xl:w-full max-xl:px-4 max-xl:h-auto max-xl:gap-10 max-xl:justify-center max-xl:items-center"
        >
            <Link
                //Animate a button to transition color when active
                className="text-basic-white bg-brand-600 rounded-lg text-2xl font-normal border-2 border-brand-600 py-4 px-10 w-full text-center
                active:bg-basic-white active:text-brand-600 active:border-2"
                href={Routes.LOGIN_DOCTOR}
            >
                Soy profesional de la salud
            </Link>

            <Link
                className="flex items-center justify-center text-basic-white bg-brand-600 rounded-lg text-2xl font-normal border-2 border-brand-600 py-4 px-10 w-full text-center
                active:bg-basic-white active:text-brand-600 active:border-2"
                href={Routes.LOGIN_PATIENT}
            >
                Soy paciente
            </Link>
        </div>
    );
};

export default LoginProfiles;
