import LabelFeature from "@/components/Atoms/Labels/LabelFeature/LabelFeature";
import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import React from "react";

type CardSpecialityProps = {
    title: string;
    icon: React.ReactNode;
    features: string[];
    specialities: string[];
    buttonContent: string;
    to: string;
};

const CardSpeciality = ({
    title,
    icon,
    features,
    specialities,
    buttonContent,
    to,
}: CardSpecialityProps) => {
    return (
        <div className="flex flex-col items-center rounded-3xl bg-brand-100 py-5 gap-3 px-5 w-1/4 max-lg:w-full justify-around ">
            <div>
                <div className="flex justify-center py-4">{icon}</div>
                <div className="text-4xl font-semibold text-center">
                    {title}
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-3 py-5">
                    {features.map((feature, index) => (
                        <LabelFeature content={feature} key={index} />
                    ))}
                </div>
                <div className="flex flex-col gap-5 py-5">
                    {/* <div className="text-xl font-semibold">
                    Registra tu cita ...
                </div> */}
                    <div className="flex flex-wrap gap-5">
                        {specialities.map((speciality, index) => (
                            <LabelPrimary content={speciality} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <LinkPrimary to={to}>{buttonContent}</LinkPrimary>
        </div>
    );
};

export default CardSpeciality;
