import EspecialitySection from "@/components/Organisms/EspecialitySection/EspecialitySection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import ReviewDoctorSection from "@/components/Organisms/ReviewDoctorSection/ReviewDoctorSection";
import Routes from "@/utils/routes/Routes";
import React from "react";

const Especiality = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainSection
                    title={"Ejerce tu especialidad en línea con nosotros"}
                    subtitle={
                        "Si eres un profesional de la salud y quieres ejercer tu especialidad en línea, nosotros te ayudamos a lograrlo."
                    }
                />
            </div>
            <EspecialitySection />
            <ReviewDoctorSection />
            <Footer />
        </main>
    );
};

export default Especiality;
