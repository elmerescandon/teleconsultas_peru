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
                title="Psicología"
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
                type="psychology"
            />
            <EspecialityDetails
                type="psychology"
                risks={[
                    "Baja autoestima.",
                    "Ansiedad generalizada.",
                    "Irriabilidad",
                    "Descontrol emocional.",
                ]}
                symptoms={[
                    "Agresividad",
                    "Sobreprotección",
                    "Incomodidad con uno mismo",
                    "Dificultad para relacionarse con los demás",
                ]}
            />
            <PhoneSteps color="psychology" />
            <ReviewDoctorSection />
            <Footer />
        </div>
    );
};

export default page;
