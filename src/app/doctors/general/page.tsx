import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";
import EspecialityMain from "@/components/Organisms/EspecialityMain/EspecialityMain";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    const specialityPhysical = [
        "Gastroenterología",
        "Neurología",
        "Endrocrinología",
        "Cardiología",
        "Otorrinolaringología",
        "Pediatría",
        "Dermatología",
        "Traumatología",
        "Oftalmología",
        "Reumatología",
        "Hematología",
        "Infectología",
        "Nefrología",
        "Neumología",
    ];
    return (
        <div>
            <Header />
            <EspecialityMain
                title="Medicina General"
                subtitle="En Salufy sabemos que la salud mental es un componente esencial en la salud general, por eso nuestro compromiso y esfuerzo en impulsarlo."
                to={Routes.RESERVE}
                image={
                    <Image
                        src="/PSYCHO_IMAGE.png"
                        alt="salufy-nutri"
                        width={500}
                        height={500}
                    />
                }
                type="medicine"
            />
            <div
                className="px-72 flex flex-col justify-center items-center
                            max-2xl:px-10"
            >
                <p className="text-4xl text-brand-600 font-semibold py-5">
                    Especialidades
                </p>
                <div
                    className="flex gap-5 py-10 px-48 flex-wrap items-center justify-center
                                max-2xl:px-2 max-2xl:gap-4 max-2xl:flex-row max-2xl:justify-center"
                >
                    {specialityPhysical.map((speciality, index) => (
                        <LabelPrimary content={speciality} key={index} />
                    ))}
                </div>
            </div>
            <PhoneSteps color="medicine" />
            {/* <ReviewDoctorSection /> */}
            <Footer />
        </div>
    );
};

export default page;
