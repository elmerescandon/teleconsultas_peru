import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorPatientSection from "@/components/Templates/DoctorPatientSection/DoctorPatientSection";
import patientsMockup from "@/utils/mockups/patientsMockup";
import React from "react";

const page = ({ params }: { params: { patientId: string } }) => {
    const { patientId } = params;
    const patient = patientsMockup.find((patient) => patient._id === patientId);

    return (
        <div>
            <Header />
            {patient ? (
                <DoctorPatientSection patient={patient} />
            ) : (
                <p>No existe el paciente</p>
            )}

            <Footer />
        </div>
    );
};

export default page;
