import ICardContent from "@/utils/Interfaces/ICardContent";
import {
    ComputerDesktopIcon,
    LockClosedIcon,
    ClockIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/solid";

const cardsContent: ICardContent[] = [
    {
        title: "A un click de distancia",
        logo: <ComputerDesktopIcon className="w-10 h-10 text-brand-900" />,
    },
    {
        title: "Privacidad y seguridad",
        logo: <LockClosedIcon className="w-10 h-10 text-brand-900" />,
    },
    {
        title: "Reserva de citas inmediata",
        logo: <ClockIcon className="w-10 h-10 text-brand-900" />,
    },
    {
        title: "Consultas por videollamada",
        logo: <VideoCameraIcon className="w-10 h-10 text-brand-900" />,
    },
];

export default cardsContent;
