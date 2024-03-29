import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Image from "next/image";
import React from "react";

type EspecialityInformationProps = {
    color: string;
    image: React.ReactNode;
    items: string[];
    more: string;
    reserve: string;
    title: string;
};

const EspecialityInformation = ({
    color,
    image,
    items,
    more,
    reserve,
    title,
}: EspecialityInformationProps) => {
    let colorValue = "";
    switch (color) {
        case "normal":
            colorValue = "bg-brand-200";
            break;
        case "psychology":
            colorValue = "bg-salufy-psycho";
            break;
        case "nutrition":
            colorValue = "bg-salufy-nutri";
            break;
        default:
            colorValue = "bg-brand-200";
            break;
    }
    return (
        <div className="flex flex-col max-w-sm">
            {image}
            <p
                className={`${colorValue} text-5xl text-basic-white font-semibold text-center py-3 px-10 rounded-lg h-28 flex items-center justify-center`}
            >
                {title}
            </p>
            <div className="flex flex-col gap-3 pt-5">
                {items.map((item, key) => {
                    return (
                        <div className="flex gap-3" key={key}>
                            <Image
                                src="./icons/ICON_CRUZ_BLUE.svg"
                                width={30}
                                height={30}
                                alt="salufy-icon"
                            />
                            {item}
                        </div>
                    );
                })}
            </div>
            <div
                className="pt-10 flex gap-5 justify-center
                            max-lg:flex-col max-lg:gap-2"
            >
                <LinkPrimary color={color} to={reserve}>
                    Agenda una cita
                </LinkPrimary>
                <LinkPrimary color={color} to={more}>
                    Conoce más
                </LinkPrimary>
            </div>
        </div>
    );
};

export default EspecialityInformation;
