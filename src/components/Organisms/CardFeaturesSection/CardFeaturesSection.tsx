import CardFeatureDetail from "@/components/Molecules/CardFeatureDetail/CardFeatureDetail";
import React from "react";

type CardFeaturesSectionProps = {
    title: string;
};

const CardFeaturesSection = ({ title }: CardFeaturesSectionProps) => {
    const cardFeatures = [
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
            color: "black",
        },
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
            color: "blue",
        },
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
            color: "gray",
        },
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
            color: "gray",
        },
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
            color: "black",
        },
        {
            title: "Registro Sencillo",
            info: "Regístrate, accede a médicos calificados para atención enfocada en tu bienestar.",
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
