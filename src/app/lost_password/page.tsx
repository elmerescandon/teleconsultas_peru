import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LostPassword from "@/components/Organisms/LostPassword/LostPassword";
import React from "react";

const page = () => {
    return (
        <div className="w-full h-screen flex items-center">
            <div className="m-auto w-1/2 flex flex-col items-center gap-5 ">
                <LinkLogo size="big" />
                <div className="text-center">
                    <h1 className="text-brand-900 font-semibold text-3xl">
                        ¿Olvidaste tu contraseña?
                    </h1>
                    <h3 className="text-basic-black font-normal text-xl">
                        Ingresa tu correo electrónico y sigue las instrucciones
                        para ingresar una nueva contraseña.
                    </h3>
                </div>
                <LostPassword />
            </div>
        </div>
    );
};

export default page;
