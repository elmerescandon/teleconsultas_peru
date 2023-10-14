import CardFeature from "@/components/Molecules/CardFeature/CardFeature";
import ICardContent from "@/utils/Interfaces/ICardContent";

import {
    LockClosedIcon,
    ClockIcon,
    VideoCameraIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const DoctorsCardSection = () => {
    const cardsContent: ICardContent[] = [
        {
            title: "Horarios adaptados a tu disponibilidad",
            logo: <ComputerDesktopIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Mayor exposición y crecimiento profesional",
            logo: <LockClosedIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Facilidad de registro y administración.",
            logo: <ClockIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Aumento de la cartera de clientes",
            logo: <VideoCameraIcon className="w-16 h-16 text-brand-900" />,
        },
    ];
    return (
        <div className="flex gap-10 justify-center flex-wrap max-md:flex-col max-md:items-center py-10">
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

export default DoctorsCardSection;
