import Routes from "@/utils/routes/Routes";
import Link from "next/link";
import React from "react";

const LoginProfiles = () => {
    return (
        <div className="flex gap-5 justify-between">
            <button className="text-basic-white bg-brand-600 rounded-lg text-2xl font-normal border-2 border-brand-600 py-4 px-10 w-full active:bg-basic-white active:text-brand-600 active:border-2">
                <Link href={Routes.LOGIN_DOCTOR}>Soy doctor</Link>
            </button>

            <button className="text-basic-white bg-brand-600 rounded-lg text-2xl font-normal border-2 border-brand-600 py-4 px-10 w-full active:bg-basic-white active:text-brand-600 active:border-2">
                <Link href={Routes.LOGIN_PATIENT}>Soy paciente</Link>
            </button>
        </div>
    );
};

export default LoginProfiles;
