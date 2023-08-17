import CircleFeature from "@/components/Molecules/CircleFeature/CircleFeature";
import IDataSection from "@/utils/Interfaces/IDataSection";
import React from "react";

const DataSection = () => {
    const dataFeatures: IDataSection[] = [
        {
            title: "9.3/10",
            subtitle: "Es la satisfaccion de nuestras consultas",
            color: "light",
            position: "bottom",
        },
        {
            title: "85%",
            subtitle: "de nuestros clientes nos recomiendan",
            color: "normal",
            position: "top",
        },
        {
            title: "80%",
            subtitle: "de nuestros clientes están satisfechos",
            color: "light",
            position: "bottom",
        },
        {
            title: "76%",
            subtitle: "consideran Aika Salud su primera opción",
            color: "dark",
            position: "top",
        },
    ];
    return (
        <div className="flex py-20 pt-36 justify-center max-lg:flex-col max-lg:items-center max-lg:py-5 max-lg:pb-16">
            {dataFeatures.map((dataFeature, index) => {
                return (
                    <CircleFeature
                        title={dataFeature.title}
                        subtitle={dataFeature.subtitle}
                        color={dataFeature.color}
                        position={dataFeature.position}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default DataSection;
