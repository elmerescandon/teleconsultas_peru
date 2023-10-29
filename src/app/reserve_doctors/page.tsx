"use client";
import CardSpeciality from "@/components/Molecules/CardSpeciality/CardSpeciality";
import EspecialityInformation from "@/components/Organisms/EspecialityInformation/EspecialityInformation";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import ReviewDoctorSection from "@/components/Organisms/ReviewDoctorSection/ReviewDoctorSection";
import QueryReserve from "@/utils/constants/queryReserve";
import Routes from "@/utils/routes/Routes";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
            <div className="flex flex-row justify-center w-full gap-16 flex-wrap py-10 max-xl:flex-col max-xl:px-16 max-xl:pt-28">
                <EspecialityInformation
                    color="normal"
                    image={
                        <Image
                            src="/GENERAL_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureMedicine}
                    more={Routes.DOCTORS_GENERAL}
                    reserve={Routes.RESERVE}
                    title="Medicina General"
                />

                <EspecialityInformation
                    color="psychology"
                    image={
                        <Image
                            src="/PSYCHO_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureMedicine}
                    more={Routes.DOCTORS_PSYCHOLOGISTS}
                    reserve={Routes.RESERVE}
                    title="Psicología"
                />

                <EspecialityInformation
                    color="nutrition"
                    image={
                        <Image
                            src="/NUTRI_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureMedicine}
                    more={Routes.DOCTORS_NUTRITIONISTS}
                    reserve={Routes.RESERVE}
                    title="Nutrición"
                />
            </div>
            <PhoneSteps color="normal" />
            <ReviewDoctorSection />
            <Footer />
        </div>
    );
};

export default page;
