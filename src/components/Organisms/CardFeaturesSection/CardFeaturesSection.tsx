import CardFeatureDetail from "@/components/Molecules/CardFeatureDetail/CardFeatureDetail";
import React from "react";

type CardFeaturesSectionProps = {
    title: string;
};

const CardFeaturesSection = ({ title }: CardFeaturesSectionProps) => {
    const cardFeatures = [
        {
            title: "Ahorro de tiempo y dinero",
            info: "Evita largas esperas y costosos desplazamientos con nuestras consultas en línea y con precios muy accesibles.",
            color: "black",
        },
        {
            title: "Alta calidad",
            info: "Profesionales calificados para un cuidado de salud excepcional.",
            color: "blue",
        },
        {
            title: "Variedad de Especialistas",
            info: "Encuentra el profesional de salud adecuado para tus necesidades.",
            color: "gray",
        },
        {
            title: "Comodidad a distancia",
            info: "Consultas en línea desde tu hogar, oficina o el lugar que mejor te adecúe.",
            color: "gray",
        },
        {
            title: "Seguridad y privacidad",
            info: "Protegemos tus datos y consultas, manteniendo la confidencialidad y la integridad de tu información personal en todo momento.",
            color: "black",
        },
        {
            title: "Apoyo integral para tu bienestar",
            info: "Ofrecemos un enfoque completo para cuidar tu salud y bienestar.",
            color: "blue",
        },
    ];
    return (
        <div className="flex flex-col py-7 max-lg:text-center">
            <div className="text-5xl pb-16 font-semibold">{title}</div>
            <div className="flex flex-wrap gap-10 justify-center items-center">
                {cardFeatures.map((cardFeature, index) => {
                    return (
                        <CardFeatureDetail
                            color={cardFeature.color}
                            title={cardFeature.title}
                            info={cardFeature.info}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CardFeaturesSection;
