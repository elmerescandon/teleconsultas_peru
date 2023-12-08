import React from "react";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";

const MainHomeSection = () => {
    return (
        <div
            className="mx-48 relative my-10 
                        max-2xl:mx-10 
                        max-lg:bg-neutral-200 max-lg:mt-32
                        max-lg:rounded-t-2xl
                        "
        >
            <div
                className="absolute top-1/3 w-2/5 pl-20 
                            max-xl:w-3/6 
                            max-lg:w-fit max-lg:top-0 max-lg:p-5 max-lg:rounded-t-2xl max-lg:z-10
                            "
            >
                <h1
                    className="text-3xl text-salufy-blue font-semibold 
                               max-xl:text-2xl max-lg:text-2xl
                               max-md:text-3xl max-md:text-center"
                >
                    Bienvenido a Salufy, salud a un click de distancia
                </h1>
                <h4
                    className="text-2xl text-brand-600 font-medium 
                                max-xl:text-xl max-lg:text-xl
                                max-md:text-xl max-md:text-center max-md:pt-7"
                >
                    Conectamos profesionales de la salud con pacientes para una
                    atención personalizada.
                </h4>
                <div className="pt-7 max-md:pt-10 max-md:text-center">
                    <LinkPrimary to={Routes.LOGIN}>Iniciar Sesión</LinkPrimary>
                </div>
            </div>
            <Image
                className="w-full max-lg:bg-neutral-200 max-lg:hidden "
                src="/MAIN_HOME_BANNER.png"
                alt="main-home-banner"
                width={20000}
                height={100}
            />
            <Image
                className="w-full 
                           max-lg:rounded-b-2xl max-lg:block hidden max-lg:pt-4 max-lg:bg-transparent
                           max-md:pt-28
                           max-sm:pt-96"
                src="/MAIN_HOME_BANNER_MOBILE.png"
                alt="main-home-banner"
                width={2000}
                height={1000}
            />
        </div>
    );
};

export default MainHomeSection;
