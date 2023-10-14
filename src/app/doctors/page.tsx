import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorsCardSection from "@/components/Templates/DoctorsCardSection/DoctorsCardSection";
import Routes from "@/utils/routes/Routes";

const Doctors = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <div className="flex flex-col items-center px-56 py-10 max-lg:justify-center max-lg:pb-5 max-lg:px-20 max-lg:pt-36 max-sm:px-5">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl font-semibold max-lg:text-center">
                            Expande tu práctica médica con Salufy
                        </h1>
                        <h5 className="text-2xl font-semibold max-lg:text-center">
                            Atiende a pacientes más allá de tu consultorio a
                            través de tus consultas en línea
                        </h5>
                        <div className="flex justify-center py-5 text-center gap-10">
                            <LinkPrimary to={Routes.REGISTER}>
                                <div className="w-48 flex items-center justify-center h-full text-xl">
                                    Soy un profesional de la salud
                                </div>
                            </LinkPrimary>
                        </div>
                    </div>
                </div>
                <DoctorsCardSection />
            </div>
            <Footer />
        </main>
    );
};

export default Doctors;
