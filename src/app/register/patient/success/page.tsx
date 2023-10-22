import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Routes from "@/utils/routes/Routes";
import React from "react";

const RegisterSuccess = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-12 px-48 max-2xl:px-10">
                <LinkLogo />
            </div>
            <div className="flex-grow w-1/2 flex flex-col items-center h-[63vh] justify-center mx-auto gap-7">
                <div className="text-4xl font-semibold text-center py-8">
                    ¡Gracias por registrarte a Salufy!
                </div>
                <div className="flex flex-col gap-5 w-72">
                    <LinkPrimary to={Routes.HOME}>Volver al incio</LinkPrimary>
                    <LinkPrimary to={Routes.LOGIN}>
                        Siguiente página
                    </LinkPrimary>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterSuccess;
