import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import InformationForm from "@/components/Organisms/InformationForm/InformationForm";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import DoctorPersonsSection from "@/components/Templates/DoctorPersonsSection/DoctorPersonsSection";
import DoctorsCardSection from "@/components/Templates/DoctorsCardSection/DoctorsCardSection";

const Doctors = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainSection
                    title={"Expande tu práctica médica con MediConnect"}
                    subtitle={
                        "Llega y atiende a pacientes más allá de tu consultorio a través de tus consultas en línea"
                    }
                />
                <DoctorsCardSection />
                <DoctorPersonsSection />
                <InformationForm
                    title={"¡Pertenece a Salufy Salud y únete al cambio!"}
                />
            </div>
            <Footer />
        </main>
    );
};

export default Doctors;
