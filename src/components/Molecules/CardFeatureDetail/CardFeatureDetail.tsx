import React from "react";

type CardFeatureDetailProps = {
    title: string;
    info: string;
    color: string;
};

const CardFeatureDetail = ({ title, info, color }: CardFeatureDetailProps) => {
    const colorClass = (color: string) => {
        switch (color) {
            case "blue":
                return { bg: "bg-brand-700", text: "text-basic-white" };
            case "black":
                return { bg: "bg-neutral-800", text: "text-basic-white" };
            case "gray":
                return { bg: "bg-neutral-200", text: "text-classic-black" };
            default:
                return { bg: "bg-neutral-200", text: "text-classic-black" };
        }
    };

    const colorSelected = colorClass(color);
    return (
        <div
            className={`flex flex-col gap-3 py-5 px-10 ${colorSelected.bg} ${colorSelected.text} rounded-3xl w-96 max-lg:w-full h-60 justify-center`}
        >
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-normal">{info}</p>
        </div>
    );
};

export default CardFeatureDetail;
