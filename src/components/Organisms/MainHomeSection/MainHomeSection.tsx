import React from "react";
import "./MainHomeSection.scss";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";

const MainHomeSection = () => {
    return (
        <div className="main-home-section flex justify-start items-center pl-20">
            <div className="w-1/2 pt-10">
                <div className="pb-3 ">
                    <p className="text-5xl text-salufy-blue font-semibold max-2xl:text-4xl">
                        Bienvenido a Salufy,
                    </p>
                    <p className="text-5xl text-salufy-blue font-semibold max-2xl:text-4xl">
                        salud a un clic de distancia
                    </p>
                </div>
                <p className="text-2xl text-brand-600 font-medium max-2xl:text-xl">
                    Conectamos profesionales de la salud con pacientes para una
                    atención personalizada en línea
                </p>
                <div className="pt-7">
                    <LinkPrimary to={Routes.DOCTORS_GENERAL}>
                        Iniciar Sesión
                    </LinkPrimary>
                </div>
            </div>
        </div>
    );
};

export default MainHomeSection;
