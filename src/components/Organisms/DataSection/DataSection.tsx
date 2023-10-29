import CircleFeature from "@/components/Molecules/CircleFeature/CircleFeature";
import IDataSection from "@/utils/Interfaces/IDataSection";
import React from "react";

const DataSection = () => {
    const dataFeatures: IDataSection[] = [
        {
            title: "9.3/10",
            subtitle: "en satisfacción",
            color: "light",
            position: "top",
        },
        {
            title: "+20K",
            subtitle: "pacientes atendidos",
            color: "normal",
            position: "top",
        },
        {
            title: "+10",
            subtitle: "profesionales trabajando con nosotros",
            color: "light",
            position: "top",
        },
    ];
    return (
        <div className="flex py-10 justify-center max-lg:flex-col max-lg:items-center max-lg:py-5 max-lg:pb-16">
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
