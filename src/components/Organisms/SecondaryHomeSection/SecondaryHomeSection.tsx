import React from "react";
import "./SecondaryHomeSection.scss";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";

const SecondaryHomeSection = () => {
    return (
        <div
            className="mx-48 relative max-2xl:mx-10 
                       max-lg:bg-neutral-200 my-10
                       max-lg:rounded-2xl"
        >
            <div
                className="absolute top-1/3 w-2/5 pr-20 right-0
                            max-xl:w-3/6 max-xl:static
                            max-lg:w-fit max-lg:top-0 max-lg:p-5 max-lg:rounded-t-2xl max-lg:z-10 max-lg:py-10"
            >
                <p
                    className="text-3xl text-salufy-blue font-semibold text-right
                    max-xl:text-4xl 
                    max-md:text-4xl max-md:text-center"
                >
                    Lleva un registro de tus citas e historial médico
                </p>
                <p
                    className="text-2xl text-brand-600 font-medium text-right
                                max-xl:text-xl max-lg:text-xl
                                max-md:text-xl max-md:text-center max-md:pt-10"
                >
                    Nuestra plataforma te permitirá ver todo tu historial de
                    citas e historia médica en un sólo lugar (recetas,
                    diagnóstico, profesional de la salud).
                </p>
                <div className="pt-7 max-md:pt-10 text-right max-md:text-center">
                    <LinkPrimary to={Routes.LOGIN}>Iniciar Sesión</LinkPrimary>
                </div>
            </div>
            <Image
                className="w-full max-lg:bg-neutral-200 max-lg:hidden"
                src="/SECONDARY_HOME_BANNER.png"
                alt="main-home-banner"
                width={20000}
                height={100}
            />
        </div>
    );
};

export default SecondaryHomeSection;
