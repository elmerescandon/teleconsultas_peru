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
                    Nutricionistas
                </h1>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <CardInfo
                            text="La mala alimentación mata a más gente en el mundo que el tabaco; una de cada 
                            cinco muertes está asociada a una mala alimentación"
                        />

                        <CardInfo text="El porcentaje de personas obesas en el Perú en el año 2021 fue de 25.8%" />

                        <CardInfo
                            text="En Salufy estamos comprometidos en promover la salud a través de la nutrición y el bienestar. 
                            Los nutricionistas son expertos en la promoción de una alimentación saludable y, por lo tanto, 
                            en la mejora de la calidad de vida de las personas."
                        />

                        <CardInfo
                            text="Nuestra misión es proporcionar acceso a las personas a un asesoramiento nutricional de 
                            calidad y apoyo en la búsqueda de hábitos alimenticios más saludables."
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
