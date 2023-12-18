import React from "react";
import "./SecondaryHomeSection.scss";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";

const SecondaryHomeSection = () => {
    return (
        <div
            className="mx-48 relative my-10
                       max-2xl:mx-24 
                       max-lg:bg-neutral-200 max-lg:rounded-2xl max-lg:mx-5"
        >
            <div
                className="absolute top-1/4 w-3/5 pr-20 right-0
                            max-xl:w-3/6 max-xl:right-0
                            max-lg:w-fit max-lg:top-0 max-lg:p-5 max-lg:rounded-t-2xl max-lg:z-10 max-lg:py-10 max-lg:static"
            >
                <p
                    className="text-3xl text-salufy-blue font-semibold text-right
                    max-xl:text-3xl 
                    max-md:text-2xl max-md:text-center"
                >
                    Conectarte con un profesional de la salud nunca fue tan
                    fácil
                </p>
                <p
                    className="text-2xl text-brand-600 font-medium text-right
                                max-xl:text-xl max-lg:text-xl
                                max-md:text-xl max-md:text-center max-md:pt-10"
                >
                    Salufy te permite conectar con especialistas en medicina,
                    salud mental y nutrición. Lleva el control de tus citas en
                    un solo lugar.
                </p>
                <div className="pt-7 max-md:pt-10 text-right max-md:text-center">
                    <LinkPrimary to={Routes.LOGIN}>Iniciar Sesión</LinkPrimary>
                </div>
            </div>
            <Image
                className="h-max max-lg:bg-neutral-200 max-lg:hidden"
                src="/SECONDARY_HOME_BANNER.png"
                alt="main-home-banner"
                width={20000}
                height={1000}
            />
        </div>
    );
};

export default SecondaryHomeSection;
