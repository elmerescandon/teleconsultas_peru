import React from "react";
import "./SecondaryHomeSection.scss";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";

const SecondaryHomeSection = () => {
    return (
        <div className="secondary-home-section flex flex-col justify-center items-center w-full h-full">
            <div className="w-1/2 ml-auto pr-20">
                <p className="text-5xl font-semibold text-salufy-blue max-2xl:text-4xl max-xl:text-xl">
                    Lleva un registro de tus citas e historial médico
                </p>
                <p className="text-2xl text-brand-600 pt-3 max-2xl:text-xl max-xl:text-base">
                    Nuestra plataforma te permitirá ver todo tu historial de
                    citas e historia médica en un sólo lugar (recetas,
                    diagnóstico, profesional de la salud).
                </p>
                <div className="pt-6">
                    <LinkPrimary to={Routes.LOGIN}>Iniciar Sesión</LinkPrimary>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHomeSection;
