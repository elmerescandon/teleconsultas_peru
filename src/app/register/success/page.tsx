import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import Footer from "@/components/Organisms/Footer/Footer";
import React from "react";

const RegisterSuccess = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row justify-between items-center py-12 px-48 max-2xl:px-10">
                <LinkLogo />
            </div>
            <div className="flex-grow w-1/2 flex flex-col items-center h-fit justify-center mx-auto gap-7">
                <div className="text-4xl font-semibold text-center">
                    ¡Gracias por registrarte a Aika Salud!
                </div>
                <div className="text-xl font-normal text-center">
                    Por favor, completa tu registro mediante el enlace de
                    confirmación enviado a tu correo electrónico:
                    pedro.alvarez@aikasalud.com
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterSuccess;
