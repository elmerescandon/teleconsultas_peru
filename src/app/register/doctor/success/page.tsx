import LinkLogo from "@/components/Atoms/Links/LinkLogo/LinkLogo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Routes from "@/utils/routes/Routes";
import React from "react";

const RegisterSuccess = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row justify-between items-center py-12 px-48 max-2xl:px-10">
                <LinkLogo />
            </div>
            <div className="flex-grow w-1/2 flex flex-col items-center justify-center mx-auto gap-7">
                <div className="text-4xl font-semibold text-center py-8">
                    <div>¡Gracias por registrarte a Salufy!</div>
                    <div>Estamos validando tu información.</div>
                </div>
                <p className="text-xl font-semibold text-center py-8">
                    Recibirás un correo a la brevedad sobre el estado de tu
                    inscripción. Si tienes alguna consulta, comunícate con
                    nostros a soporte@salufyorg.com
                </p>
                <div className="flex flex-col gap-5 w-72 py-10">
                    <LinkPrimary to={Routes.HOME}>Volver al incio</LinkPrimary>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterSuccess;
