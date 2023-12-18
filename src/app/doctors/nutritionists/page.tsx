import EspecialityDetails from "@/components/Organisms/EspecialityDetails /EspecialityDetails";
import EspecialityMain from "@/components/Organisms/EspecialityMain/EspecialityMain";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <EspecialityMain
                title="Alimentación"
                subtitle="Una buena alimentación mejora tu salud de forma integral,
                tanto a nivel físico como mental. En Salufy podrás encontrar
                especialistas en nutrición que te ayudarán a llevar un estilo
                de vida más saludable."
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
                to={[
                    // Dirigido a personas que:
                    "Objetivos corporales",
                    "Rendimientos deportivos",
                    "Problemas digestivos",
                    "Prevención de enfermedades",
                ]}
                benefits={[
                    "Calidad de vida",
                    "Hábitos alimenticios",
                    "Energíá y vitalidad",
                    "Reducción de ansiedad y estrés",
                ]}
            />
            <PhoneSteps color="nutrition" />
            {/* <ReviewDoctorSection /> */}
            <Footer />
        </div>
    );
};

export default page;
