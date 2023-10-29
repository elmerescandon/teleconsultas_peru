import CardInfo from "@/components/Atoms/Cards/CardInfo/CardInfo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import EspecialityMain from "@/components/Organisms/EspecialityMain/EspecialityMain";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import ReviewDoctorSection from "@/components/Organisms/ReviewDoctorSection/ReviewDoctorSection";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <EspecialityMain
                title="Psicología"
                subtitle="En Salufy sabemos que la salud mental es un componente esencial en la salud general, por eso nuestro compromiso y esfuerzo en impulsarlo."
                to={Routes.RESERVE}
                image={
                    <Image
                        src="/PSICO_IMAGE.png"
                        alt="salufy-nutri"
                        width={500}
                        height={500}
                    />
                }
                type="nutrition"
            />
            <PhoneSteps color="nutrition" />
            <ReviewDoctorSection />
            <Footer />
        </div>
    );
};

export default page;
