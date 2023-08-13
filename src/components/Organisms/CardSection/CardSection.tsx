import CardFeature from "@/components/Molecules/CardFeature/CardFeature";
import ICardContent from "@/utils/Interfaces/ICardContent";

import {
    LockClosedIcon,
    ClockIcon,
    VideoCameraIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const CardSection = () => {
    const cardsContent: ICardContent[] = [
        {
            title: "A un click de distancia",
            logo: <ComputerDesktopIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Privacidad y seguridad",
            logo: <LockClosedIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Reserva de citas inmediata",
            logo: <ClockIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Consultas por videollamada",
            logo: <VideoCameraIcon className="w-16 h-16 text-brand-900" />,
        },
    ];
    return (
        <div className="flex gap-10 justify-center flex-wrap max-md:flex-col max-md:items-center py-20">
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
