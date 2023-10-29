"use client";
import CardSection from "@/components/Organisms/CardSection/CardSection";
import DataSection from "@/components/Organisms/DataSection/DataSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainHomeSection from "@/components/Organisms/MainHomeSection/MainHomeSection";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";

const Home = () => {
    return (
        <main>
            <Header />
            <div className="page-body">
                <MainHomeSection />
                <CardSection />
            </div>
            <PhoneSteps color="normal" />
            <div className="page-body">
                <DataSection />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
