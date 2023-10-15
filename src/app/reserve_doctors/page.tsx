"use client";
import CardSpeciality from "@/components/Molecules/CardSpeciality/CardSpeciality";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import Routes from "@/utils/routes/Routes";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import React from "react";

const page = () => {
    const featureMedicine = [
        "Encuentra la especialidad que buscas",
        "Te brindamos todas las disponibilidades horarias",
        "Elige el horario y doctor según tus necesidades",
    ];

    const featureMental = [
        "Tu salud mental es nuestra prioridad",
        "Disponemos de psicólogos especializados",
        "Te brindamos el apoyo necesario para tu bienestar mental y emocional",
    ];

    const featureNutrition = [
        "Somos conscientes de la importancia de una buena alimentación",
        "Nuestros nutricionistas te ayudarán a lograr tus objetivos",
        "Te guíámos durante todo el proceso de tu alimentación",
    ];

    return (
        <div>
            <Header />
            <div className="flex flex-row justify-center w-full gap-7 flex-wrap py-10 max-xl:flex-col max-xl:px-16 max-xl:pt-28">
                <CardSpeciality
                    title="Medicina General"
                    icon={
                        <LightBulbIcon className="w-16 h-16 text-brand-900" />
                    }
                    features={featureMedicine}
                    specialities={[]}
                    to={`${Routes.RESERVE}?spec=gen`}
                    buttonContent="Reserva una cita"
                />
                <CardSpeciality
                    title="Psicología"
                    icon={
                        <LightBulbIcon className="w-16 h-16 text-brand-900" />
                    }
                    features={featureMental}
                    specialities={[]}
                    to={`${Routes.RESERVE}?spec=psic`}
                    buttonContent="Reserva una cita"
                />
                <CardSpeciality
                    title="Nutrición"
                    icon={
                        <LightBulbIcon className="w-16 h-16 text-brand-900" />
                    }
                    features={featureNutrition}
                    specialities={[]}
                    to={`${Routes.RESERVE}?spec=nutri`}
                    buttonContent="Reserva una cita"
                />
            </div>

            <Footer />
        </div>
    );
};

export default page;
