import Routes from "@/utils/routes/Routes";
import { PlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginProfiles = () => {
    return (
        <div
            className="flex gap-5 justify-between w-full
                        max-xl:flex-col max-xl:w-full max-xl:px-4 max-xl:h-auto max-xl:gap-10 max-xl:justify-center max-xl:items-center"
        >
            <Link
                //Animate a button to transition color when active
                className="flex flex-col items-center justify-center text-brand-600 bg-basic-white rounded-lg text-2xl border-4 border-brand-600 p-10 gap-3 w-2/3
                active:bg-brand-600 active:text-basic-white active:scale-95 transition-all duration-100"
                href={Routes.LOGIN_DOCTOR}
            >
                <Image
                    src="/caduceo_icon.png"
                    alt="caduceo"
                    width={40}
                    height={40}
                />
                {/* <PlusIcon className="w-10 h-10" /> */}
                <p className="text-center">Soy profesional de la salud</p>
            </Link>

            <Link
                className="flex flex-col items-center justify-center text-brand-600 bg-basic-white rounded-lg text-2xl border-4 border-brand-600 p-10 gap-3 w-2/3
                active:bg-brand-600 active:text-basic-white active:scale-95 transition-all duration-100"
                href={Routes.LOGIN_PATIENT}
            >
                <UsersIcon className="w-10 h-10" />
                <p className="text-center">Soy paciente</p>
            </Link>
        </div>
    );
};

export default LoginProfiles;
