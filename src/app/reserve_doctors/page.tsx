"use client";
import EspecialityInformation from "@/components/Organisms/EspecialityInformation/EspecialityInformation";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    const featureMedicine = [
        "Encuentra la especialidad que buscas y reserva tu cita médica.",
        "Te brindamos todas las disponibilidades horarias de los doctores para que puedas elegir.",
        "Elige el horario y doctor según tus necesidades, y reserva tu cita médica.",
    ];

    const featureMental = [
        "Nuestra variedad de psicólogos te apoyarán hacia tu bienestar psicológico y emocional.",
        "Encuentra el psicólogo que más se adapte a tus necesidades.",
        "Somos conscientes de la importancia de la salud mental. Nos preocupamos por ti.",
    ];

    const featureNutrition = [
        "Nuestros expertos te orientarán hacia un plan de alimentación saludable.",
        "Te ofrecemos una variedad de nutricionistas para que elijas el que más se adapte a tus necesidades.",
        "Llega a la cita con todas las consultas que tengas y necesites resolver.",
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
                    items={featureMental}
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
                    items={featureNutrition}
                    more={Routes.DOCTORS_NUTRITIONISTS}
                    reserve={Routes.RESERVE}
                    title="Nutrición"
                />
            </div>
            <PhoneSteps color="normal" />
            {/* <ReviewDoctorSection /> */}
            <Footer />
        </div>
    );
};

export default page;
