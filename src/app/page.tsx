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
                content="Salufy te conecta con profesionales de la salud en base a tus necesidades y disponibilidad."
                miniHeader=""
                order="left"
                pathImage="/doctors_1.jpg"
                title="Agenda tu cita donde quieras cuando quieras"
                sizeImage={500}
            />
            <SecondarySection
                content="Nuestra plataforma te permitirá ver todo tu historial de citas e historia médica (recetas, diagnóstico, profesional de la salud) y demás información necesaria para que puedas realizar un mejor seguimiento."
                miniHeader=""
                order="right"
                pathImage="/doctors_2.jpg"
                title="Lleva un registro de tus citas e historial médico."
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
