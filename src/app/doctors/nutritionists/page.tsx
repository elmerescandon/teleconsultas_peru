import CardInfo from "@/components/Atoms/Cards/CardInfo/CardInfo";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import EspecialityDetails from "@/components/Organisms/EspecialityDetails /EspecialityDetails";
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
                title="Nutrición"
                subtitle="En Salufy estamos comprometidos en promover la salud a través de un asesoramiento nutricional de calidad y apoyo en la búsqueda de hábitos alimenticios más saludables."
                to={Routes.RESERVE}
                image={
                    <Image
                        src="/NUTRI_IMAGE.png"
                        alt="salufy-nutri"
                        width={500}
                        height={500}
                    />
                }
                type="nutrition"
            />
            <EspecialityDetails
                type="nutrition"
                symptoms={[
                    "Fatiga.",
                    "Dolor de cabeza.",
                    "Problemas digestivos.",
                    "Problemas de piel.",
                ]}
                risks={[
                    "Trastornos alimentarios.",
                    "Problemas de salud mental.",
                    "Poca actividad física.",
                    "Estrés.",
                ]}
            />
            <PhoneSteps color="nutrition" />
            <ReviewDoctorSection />
            <Footer />
        </div>
    );
};

export default page;
