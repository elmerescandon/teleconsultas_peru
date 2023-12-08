import {
    NutritionContent,
    PsychologyContent,
} from "@/utils/constants/images/EspecialityImages";
import React from "react";

type EspecialityDetailsProps = {
    banner?: React.ReactNode;
    type: string;
    symptoms: string[];
    risks: string[];
};

const EspecialityDetails = ({
    type,
    symptoms,
    risks,
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
            className={`flex mb-10 ${colorValue} rounded-3xl mx-48 
                        max-2xl:mx-20 max-2xl:mb-10
                        max-lg:flex-col
                        max-md:mx-5`}
        >
            {type === "psychology" ? PsychologyContent.banner : null}
            {type === "nutrition" ? NutritionContent.banner : null}
            <div
                className="flex pr-10 gap-10 w-full
                             max-2xl:gap-10 max-2xl:py-5 max-2xl:px-10
                             max-lg:flex-col max-lg:gap-10 max-lg:py-10
                             max-md:gap-5 max-md:py-5 max-md:px-5"
            >
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit my-10 pb-10
                                max-2xl:w-full max-2xl:flex-grow
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
                        {symptoms.map((symptom, index) => (
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
                                    {symptom}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit my-10 pb-10
                                max-2xl:w-full max-2xl:flex-grow
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
                        {risks.map((risk, index) => (
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
                                    {risk}{" "}
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
