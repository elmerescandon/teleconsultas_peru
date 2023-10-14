"use client";
import CardSection from "@/components/Organisms/CardSection/CardSection";
import DataSection from "@/components/Organisms/DataSection/DataSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainSection from "@/components/Organisms/MainSection/MainSection";
import SecondarySection from "@/components/Organisms/SecondarySection/SecondarySection";
import Routes from "@/utils/routes/Routes";

const Home = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainSection
                    title={"Bienvenido a Salufy, salud a un clic de distancia"}
                    subtitle={
                        "Conectamos profesionales de la salud con pacientes para una atención personalizada en línea."
                    }
                />
                <CardSection />
            </div>
            <SecondarySection
                buttonInfo="Ver más..."
                content="Salufy Salud te conecta con profesionales de acuerdo a tu disponibilidad."
                miniHeader="Para Pacientes"
                order="left"
                pathImage="/doctors_1.jpg"
                title="Agenda tu cita donde quieras cuando quieras"
                to={Routes.PATIENTS}
                sizeImage={500}
            />
            <SecondarySection
                buttonInfo="Ver más..."
                content="Nuestra plataforma contiene todas las herramientas necesarias para ti."
                miniHeader="Para Doctores"
                order="right"
                pathImage="/doctors_2.jpg"
                title="Atiende sin pensar en reportes y recetas"
                to={Routes.DOCTORS}
                sizeImage={500}
            />
            <div className="page-body">
                <DataSection />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
