"use client";
import CardSection from "@/components/Organisms/CardSection/CardSection";
import DataSection from "@/components/Organisms/DataSection/DataSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainHomeSection from "@/components/Organisms/MainHomeSection/MainHomeSection";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import SecondarySection from "@/components/Organisms/SecondarySection/SecondarySection";

const Home = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainHomeSection />
                <CardSection />
            </div>
            <PhoneSteps color="normal" />
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
