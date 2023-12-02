"use client";
import CardSection from "@/components/Organisms/CardSection/CardSection";
import CardSectionMobile from "@/components/Organisms/CardSection/CardSectionMobile";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import MainHomeSection from "@/components/Organisms/MainHomeSection/MainHomeSection";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import SecondaryHomeSection from "@/components/Organisms/SecondaryHomeSection/SecondaryHomeSection";

const Home = () => {
    return (
        <main className="h-screen">
            <Header />
            <MainHomeSection />
            <CardSection />
            <CardSectionMobile />
            <PhoneSteps color="normal" />
            <SecondaryHomeSection />
            <Footer />
        </main>
    );
};

export default Home;
