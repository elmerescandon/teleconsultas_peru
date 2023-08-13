"use client";

import CardSection from "@/components/Organisms/CardSection/CardSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import Routes from "@/utils/routes/Routes";

const Home = () => {
    return (
        <main>
            <div className="page-body">
                <Header />
                <MainSection
                    title={
                        "Bienvenido a Aika Salud - Tu puerta a una atención de calidad"
                    }
                    subtitle={
                        "Conectando pacientes y doctores para una atención médica personalizada en línea"
                    }
                    linkRef={Routes.RESERVE}
                    linkName={"¡Reserva tu cita ya!"}
                />
                <CardSection />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
