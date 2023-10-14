import CardInfo from "@/components/Atoms/Cards/CardInfo/CardInfo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import Routes from "@/utils/routes/Routes";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col px-48">
                <h1 className="text-5xl font-semibold text-center py-10">
                    Psicólogos
                </h1>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <CardInfo
                            text="Los casos de afecciones de salud mental aumentaron casi 20% durante el 2022 
                            en el Perú"
                        />

                        <CardInfo
                            text="Los problemas de salud mental más recurrentes son depresión, ansiedad y 
                            reacción al estrés"
                        />

                        <CardInfo
                            text="En Salufy sabemos que la salud mental es un componente esencial en la salud general, por eso 
                            nuestro compromiso y esfuerzo en impulsarlo."
                        />

                        <CardInfo
                            text="Nuestra misión es proporcionar un espacio seguro y accesible donde los psicólogos pueden 
                            brindar apoyo y tratamiento de calidad a aquellos que lo necesiten"
                        />
                    </div>
                </div>
                <div className="flex py-5">
                    <LinkPrimary to={Routes.RESERVE}>
                        ¡Reserva tu cita!
                    </LinkPrimary>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default page;
