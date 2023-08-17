"use client";

import CardFeaturesSection from "@/components/Organisms/CardFeaturesSection/CardFeaturesSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import ReviewsSection from "@/components/Organisms/ReviewsSection/ReviewsSection";
import StepsSection from "@/components/Organisms/StepsSection/StepsSection";
import Routes from "@/utils/routes/Routes";

const Patients = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainSection
                    title={"Mejora tu Experiencia de Salud con MediConnect"}
                    subtitle={
                        "Consultas Médicas de Calidad desde la Comodidad de tu Hogar"
                    }
                    linkRef={Routes.RESERVE}
                    linkName={"¡Reserva tu cita ya!"}
                />
                <CardFeaturesSection title="Accede a todos nuestros beneficios..." />
            </div>
            <StepsSection />
            <div className="page-body">
                <ReviewsSection />
            </div>
            <Footer />
        </main>
    );
};

export default Patients;
