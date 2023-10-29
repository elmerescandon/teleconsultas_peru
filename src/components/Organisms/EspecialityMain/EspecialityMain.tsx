import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import React from "react";

type EspecialityMainProps = {
    title: string;
    subtitle: string;
    to: string;
    image: React.ReactNode;
    type: string;
};

const EspecialityMain = ({
    title,
    subtitle,
    to,
    image,
    type,
}: EspecialityMainProps) => {
    let colorText = "text-basic-black";

    switch (type) {
        case "psicology":
            colorText = "text-salufy-psico-strong";
            break;
        case "nutrition":
            colorText = "text-salufy-nutri-strong";
            break;
        case "medicine":
            colorText = "text-medicine";
            break;
        default:
            colorText = "text-basic-black";
            break;
    }

    return (
        <div className="flex gap-5 px-48 w-full py-20 items-center justify-center">
            <div className="flex flex-col gap-7 w-1/2 justify-center">
                <div className={`text-5xl font-semibold ${colorText}`}>
                    {title}
                </div>
                <div className={`text-2xl font-medium ${colorText}`}>
                    {subtitle}
                </div>
                <div>
                    <LinkPrimary to={to}>¡Reserva tu cita!</LinkPrimary>
                </div>
            </div>
            {image}
        </div>
    );
};

export default EspecialityMain;
