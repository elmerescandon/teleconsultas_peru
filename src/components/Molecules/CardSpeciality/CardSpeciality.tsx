import LabelFeature from "@/components/Atoms/Labels/LabelFeature/LabelFeature";
import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";
import React from "react";

type CardSpecialityProps = {
    icon: React.ReactNode;
    features: string[];
    specialities: string[];
};

const CardSpeciality = ({
    icon,
    features,
    specialities,
}: CardSpecialityProps) => {
    return (
        <div className="flex flex-col items-center rounded-3xl bg-brand-100 py-5 gap-3 px-5 w-2/6 max-lg:w-full">
            {icon}
            <div className="text-4xl font-semibold">Salud Mental</div>
            <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                    <LabelFeature content={feature} key={index} />
                ))}
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="text-xl font-semibold">
                    Nos desempeñamos en...
                </div>
                <div className="flex flex-wrap gap-5">
                    {specialities.map((speciality, index) => (
                        <LabelPrimary content={speciality} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSpeciality;
