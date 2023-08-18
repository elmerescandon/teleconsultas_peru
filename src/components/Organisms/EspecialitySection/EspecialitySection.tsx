import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
    CheckIcon,
    HeartIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";
import LabelFeature from "@/components/Atoms/Labels/LabelFeature/LabelFeature";
import CardSpeciality from "@/components/Molecules/CardSpeciality/CardSpeciality";

const EspecialitySection = () => {
    const featureMental = [
        "Agenda en todo momento",
        "Escoge tu terapista de preferencia",
        "Paga con el método de pago de tu preferencia",
    ];

    const featurePhysical = [
        "Agenta en todo momento",
        "Revisa tus recetas en línea",
        "Paga con el método de pago de tu preferencia",
        "Consulta tu historial médico",
    ];

    const specialityMental = [
        "Psicología",
        "Psiquiatría",
        "Coaching y Motivación",
    ];
    const specialityPhysical = [
        "Medicina General",
        "Endrocrinología",
        "Nutrición",
        "Cardiología",
        "Otorrinolaringología",
        "Ginecología",
        "Pediatría",
        "Dermatología",
        "Traumatología",
    ];

    return (
        <div className="bg-brand-50 px-40 py-10 max-xl:px-10 ">
            <div className="text-5xl font-semibold pb-7">
                Conoce más sobre nuestras especialidades
            </div>
            <div className="flex flex-row justify-center w-full gap-7 flex-wrap">
                <CardSpeciality
                    icon={
                        <LightBulbIcon className="w-16 h-16 text-brand-900" />
                    }
                    features={featureMental}
                    specialities={specialityMental}
                />
                <CardSpeciality
                    icon={<HeartIcon className="w-16 h-16 text-brand-900" />}
                    features={featurePhysical}
                    specialities={specialityPhysical}
                />
            </div>
        </div>
    );
};

export default EspecialitySection;
