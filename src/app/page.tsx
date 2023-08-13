"use client";

import CardSection from "@/components/Organisms/CardSection/CardSection";
import Header from "@/components/Organisms/Header/Header";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import Routes from "@/utils/routes/Routes";

const Home = () => {
    return (
        <main>
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
        </main>
    );
};

export default Home;
