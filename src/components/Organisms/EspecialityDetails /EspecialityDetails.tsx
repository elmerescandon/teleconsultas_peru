import { PsychologyContent } from "@/utils/constants/images/EspecialityImages";
import Image from "next/image";
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
    switch (type) {
        case "psychology":
            colorValue = "bg-salufy-psycho-light";
            break;
        case "nutrition":
            colorValue = "bg-salufy-nutri-light";
            break;
        case "general":
            colorValue = "bg-salufy-blue";
            break;
        default:
            break;
    }

    return (
        <div
            className={`flex items-center mx-48 my-10 ${colorValue} rounded-3xl`}
        >
            {type === "psychology" ? PsychologyContent.banner : null}
            <div>
                {type === "psychology" ? PsychologyContent.ratio : null}
                <p>Síntomas más comúnes</p>
                {symptoms.map((symptom, index) => (
                    <div key={index}>
                        {type === "psychology" ? PsychologyContent.item : null}
                        <p>{symptom}</p>
                    </div>
                ))}
            </div>
            <div>
                {type === "psychology" ? PsychologyContent.risk : null}
                <p>Factores de riesgo</p>
                {risks.map((risk, index) => (
                    <div key={index}>
                        {type === "psychology" ? PsychologyContent.item : null}
                        <p>{risk} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EspecialityDetails;
