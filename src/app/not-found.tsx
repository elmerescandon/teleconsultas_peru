import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Routes from "@/utils/routes/Routes";
import React from "react";

const NotFoundGeneral = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[75vh]">
                <p className="text-5xl font-semibold text-center">404</p>
                <p className="text-3xl font-semibold text-center py-10">
                    Lo sentimos, parece que la página que estás buscando no
                    existe.
                </p>
                <LinkPrimary to={Routes.HOME}>Volver al inicio</LinkPrimary>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundGeneral;
