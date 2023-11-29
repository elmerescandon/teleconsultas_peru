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
        case "psychology":
            colorText = "text-salufy-psycho-strong";
            break;
        case "nutrition":
            colorText = "text-salufy-nutri-strong";
            break;
        case "medicine":
            colorText = "text-brand-600";
            break;
        default:
            colorText = "text-basic-black";
            break;
    }

    return (
        <div
            className="flex gap-5 px-48 w-full py-20 items-center justify-center
                max-2xl:px-10 max-2xl:flex-col max-2xl:pt-48"
        >
            <div
                className="flex flex-col gap-7 w-1/2 justify-center
                            max-2xl:w-full max-2xl:items-center max-2xl:gap-10"
            >
                <div
                    className={`text-5xl font-semibold ${colorText} max-2xl:text-center`}
                >
                    {title}
                </div>
                <div
                    className={`text-2xl font-medium ${colorText} max-2xl:text-center`}
                >
                    {subtitle}
                </div>
                <div>
                    <LinkPrimary to={to} color={type}>
                        ¡Reserva tu cita!
                    </LinkPrimary>
                </div>
            </div>
            {image}
        </div>
    );
};

export default EspecialityMain;
