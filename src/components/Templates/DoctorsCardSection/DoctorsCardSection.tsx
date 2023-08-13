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
            title: "Eficiente gestión de pacientes",
            logo: <ComputerDesktopIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Flexibilidad en horarios para mayor conveniencia.",
            logo: <LockClosedIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Expansión del alcance profesional y geográfico.",
            logo: <ClockIcon className="w-16 h-16 text-brand-900" />,
        },
        {
            title: "Salvaguardia de datos confidenciales garantizada.",
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

export default DoctorsCardSection;
