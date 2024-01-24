"use client";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PaymentAppointmentSection from "@/components/Templates/PaymentAppointmentSection/PaymentAppointmentSection";

const page = () => {
    return (
        <div>
            <Header />
            <PaymentAppointmentSection />
            <Footer />
        </div>
    );
};

export default page;
