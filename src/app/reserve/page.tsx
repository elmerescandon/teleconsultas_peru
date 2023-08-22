import React, { createContext } from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";

export const AppointmentContext = createContext({
    appointmentInfo: {
        specialityId: "",
        doctorId: "",
        reason: "",
        symptoms: "",
        details: "",
        date: null,
        hour: null,
    },
    setAppointmentInfo: () => {},
});

const initialAppointmentInfo = {
    specialityId: "",
    doctorId: "",
    reason: "",
    symptoms: "",
    details: "",
    date: null,
    hour: null,
};

const page = () => {
    return (
        <div>
            <Header />
            <AppointmentContext.Provider value={{initialAppointmentInfo}>
                <ReserveAppointmentSection />
            </AppointmentContext.Provider>
            <Footer />
        </div>
    );
};

export default page;
