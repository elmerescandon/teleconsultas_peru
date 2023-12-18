import {
    NutritionContent,
    PsychologyContent,
} from "@/utils/constants/images/EspecialityImages";
import React from "react";

type EspecialityDetailsProps = {
    banner?: React.ReactNode;
    type: string;
    to: string[];
    benefits: string[];
};

const EspecialityDetails = ({
    type,
    to,
    benefits,
}: EspecialityDetailsProps) => {
    let colorValue = "bg-salufy-blue";
    let colorText = "text-salufy-blue";
    switch (type) {
        case "psychology":
            colorValue = "bg-salufy-psycho-light";
            colorText = "text-salufy-psycho";
            break;
        case "nutrition":
            colorValue = "bg-salufy-nutri-light";
            colorText = "text-salufy-nutri";
            break;
        case "general":
            colorValue = "bg-salufy-blue";
            colorText = "text-salufy-blue";
            break;
        default:
            break;
    }

    return (
        <div
            className={`flex mb-10  rounded-3xl mx-48 h-[500px] max-h-[600px]
                        max-2xl:mx-20 max-2xl:mb-10 
                        max-lg:flex-col max-lg:h-auto max-lg:max-h-max
                        max-md:mx-5 `}
        >
            <div className="max-lg:hidden">
                {type === "psychology" ? PsychologyContent.banner : null}
                {type === "nutrition" ? NutritionContent.banner : null}
            </div>

            <div
                className={`flex ${colorValue} px-10 gap-10 w-full rounded-3xl mx-5
                             max-2xl:gap-10 max-2xl:py-5 max-2xl:px-10 
                             max-lg:flex-col max-lg:gap-10 max-lg:py-10 max-lg:mx-0
                             max-md:gap-5 max-md:py-5 max-md:px-5`}
            >
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit my-10 pb-10
                                max-2xl:w-full max-2xl:flex-grow max-2xl:my-0
                                max-lg:my-0 max-lg:pb-10 max-lg:items-center"
                >
                    {type === "psychology" ? PsychologyContent.ratio : null}
                    {type === "nutrition" ? NutritionContent.ratio : null}
                    <p
                        className={`${colorText} text-3xl -mt-10 font-semibold pb-5
                                    max-md:text-2xl`}
                    >
                        Dirigido a
                    </p>
                    <div className="flex flex-col gap-3 w-full">
                        {to.map((toValue, index) => (
                            <div
                                key={index}
                                className="flex gap-5 items-center"
                            >
                                {type === "psychology"
                                    ? PsychologyContent.item
                                    : null}
                                {type === "nutrition"
                                    ? NutritionContent.item
                                    : null}
                                <p className="text-lg max-md:text-base">
                                    {toValue}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit my-10 pb-10
                                max-2xl:w-full max-2xl:flex-grow max-2xl:my-0 
                                max-lg:my-0 max-lg:pb-10 max-lg:items-center"
                >
                    {type === "psychology" ? PsychologyContent.risk : null}
                    {type === "nutrition" ? NutritionContent.risk : null}

                    <p
                        className={`${colorText} text-3xl -mt-10 font-semibold pb-5
                                    max-md:text-2xl`}
                    >
                        Beneficios
                    </p>
                    <div className="flex flex-col gap-3 w-full">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex gap-5 items-center"
                            >
                                {type === "psychology"
                                    ? PsychologyContent.item
                                    : null}
                                {type === "nutrition"
                                    ? NutritionContent.item
                                    : null}
                                <p className="text-lg max-md:text-base">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EspecialityDetails;
