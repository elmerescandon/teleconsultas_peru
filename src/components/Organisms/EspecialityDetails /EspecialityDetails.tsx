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
            className={`flex items-center mx-48 mb-10 ${colorValue} rounded-3xl justify-between 
                        mx-10
                        max-2xl:flex-col`}
        >
            {type === "psychology" ? PsychologyContent.banner : null}
            {type === "nutrition" ? NutritionContent.banner : null}
            <div
                className="flex pr-32 gap-20 w-full
                            max-2xl:flex-col max-2xl:gap-10 max-2xl:p-5"
            >
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit pb-10
                                max-2xl:w-full"
                >
                    {type === "psychology" ? PsychologyContent.ratio : null}
                    {type === "nutrition" ? NutritionContent.ratio : null}
                    <p
                        className={`${colorText} text-3xl -mt-10 font-semibold pb-5`}
                    >
                        Síntomas más comúnes
                    </p>
                    <div className="flex flex-col gap-3">
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
                                <p className="text-lg">{symptom}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="bg-basic-white flex flex-col w-1/2 rounded-3xl px-10 min-h-fit pb-10
                                max-2xl:w-full"
                >
                    {type === "psychology" ? PsychologyContent.risk : null}
                    {type === "nutrition" ? NutritionContent.risk : null}

                    <p
                        className={`${colorText} text-3xl -mt-10 font-semibold pb-5`}
                    >
                        Factores de riesgo
                    </p>
                    <div className="flex flex-col gap-3">
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
                                <p className="text-lg">{risk} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EspecialityDetails;
