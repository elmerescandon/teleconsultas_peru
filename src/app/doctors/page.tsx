import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import InformationForm from "@/components/Organisms/InformationForm/InformationForm";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import DoctorPersonsSection from "@/components/Templates/DoctorPersonsSection/DoctorPersonsSection";
import DoctorsCardSection from "@/components/Templates/DoctorsCardSection/DoctorsCardSection";
import Routes from "@/utils/routes/Routes";

const Doctors = () => {
    return (
        <main>
            <div className="page-body">
                <Header />
                <MainSection
                    title={"Expande tu práctica médica con MediConnect"}
                    subtitle={
                        "Llega y atiende a pacientes más allá de tu consultorio a través de tus consultas en línea"
                    }
                    linkRef={Routes.RESERVE}
                    linkName={"¡Reserva tu cita ya!"}
                />
                <DoctorsCardSection />
                <DoctorPersonsSection />
                <InformationForm
                    title={"¡Pertenece a Aika Salud y únete al cambio!"}
                />
            </div>
            <Footer />
        </main>
    );
};

export default Doctors;
