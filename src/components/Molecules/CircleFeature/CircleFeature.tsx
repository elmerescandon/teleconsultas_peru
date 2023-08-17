import React from "react";

type CircleFeatureProps = {
    title: string;
    subtitle: string;
    color: "light" | "dark" | "normal";
    position: "top" | "bottom";
};

const CircleFeature = ({
    title,
    subtitle,
    color,
    position,
}: CircleFeatureProps) => {
    const colorClass = (color: string, position: string) => {
        switch (color) {
            case "light":
                return {
                    bg: "bg-neutral-50",
                    border: "border-brand-500",
                    titleColor: "text-classic-black",
                    subtitleColor: "text-neutral-600",
                    position: position === "top" ? "-mt-20" : "",
                };
            case "dark":
                return {
                    bg: "bg-neutral-700",
                    border: "border-neutral-700",
                    titleColor: "text-neutral-50",
                    subtitleColor: "text-neutral-50",
                    position: position === "top" ? "-mt-20" : "",
                };
            case "normal":
                return {
                    bg: "bg-brand-500",
                    border: "border-brand-500",
                    titleColor: "text-neutral-50",
                    subtitleColor: "text-neutral-50",
                    position: position === "top" ? "-mt-20" : "",
                };
            default:
                return {
                    bg: "bg-brand-50",
                    border: "border-brand-500",
                    titleColor: "text-classic-black",
                    subtitleColor: "text-neutral-600",
                    position: position === "top" ? "-mt-10" : "",
                };
        }
    };

    const selectedColor = colorClass(color, position);

    return (
        <div
            className={`rounded-full ${selectedColor.bg} w-80 h-80 flex flex-col justify-center items-center 
            gap-4 -mr-12 ${selectedColor.position} border-4 ${selectedColor.border} max-lg:m-0 max-lg:-mb-10`}
        >
            <div
                className={`${selectedColor.titleColor} text-5xl font-semibold`}
            >
                {title}
            </div>
            <div
                className={`${selectedColor.subtitleColor} text-xl font-normal text-center w-3/5`}
            >
                {subtitle}
            </div>
        </div>
    );
};

export default CircleFeature;
