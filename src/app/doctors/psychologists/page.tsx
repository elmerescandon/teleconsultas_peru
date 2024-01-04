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
                title="Salud Mental"
                subtitle="Cuidar la salud mental tiene un impacto directo en nuestra forma pensar, sentir y actuar. En Salufy podrás encontrar distintos profesionales según tus necesidades."
                to={Routes.RESERVE}
                image={
                    <Image
                        src="/PSYCHO_IMAGE.png"
                        alt="salufy-nutri"
                        width={500}
                        height={500}
                    />
                }
                type="psychology"
            />
            <EspecialityDetails
                type="psychology"
                to={[
                    "Depresión",
                    "Autoestima",
                    "Ansiedad y estrés",
                    "Autoconocimiento",
                ]}
                benefits={[
                    "Calidad de vida",
                    "Crecimiento personal",
                    "Relaciones interpersonales",
                    "Manejo de emociones",
                ]}
            />
            <PhoneSteps color="psychology" />
            {/* <ReviewDoctorSection /> */}
            <Footer />
        </div>
    );
};

export default page;
