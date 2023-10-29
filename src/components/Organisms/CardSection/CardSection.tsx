import CardFeature from "@/components/Molecules/CardFeature/CardFeature";
import ICardContent from "@/utils/Interfaces/ICardContent";

import {
    LockClosedIcon,
    ClockIcon,
    VideoCameraIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const CardSection = () => {
    const cardsContent: ICardContent[] = [
        {
            title: "A un click de distancia",
            logo: (
                <Image
                    src="./icons/ICON_SEGURIDAD.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Privacidad y seguridad",
            logo: (
                <Image
                    src="./icons/ICON_CORAZON.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Reserva de citas inmediata",
            logo: (
                <Image
                    src="./icons/ICON_CALENDARIO.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
        {
            title: "Consultas por videollamada",
            logo: (
                <Image
                    src="./icons/ICON_VIDEOLLAMADA.svg"
                    alt="salufy-icon-corazon"
                    width={150}
                    height={150}
                />
            ),
        },
    ];
    return (
        <div className="flex gap-10 justify-center flex-wrap py-5 max-lg:10 max-lg:items-center">
            {cardsContent.map((cardContent, index) => {
                return (
                    <CardFeature
                        key={index}
                        iconComponent={cardContent.logo}
                        title={cardContent.title}
                    />
                );
            })}
        </div>
    );
};

export default CardSection;
