import CardPersonasSection from "@/components/Organisms/CardPersonasSection/CardPersonasSection";
import React from "react";

const DoctorPersonsSection = () => {
    const persons = [
        {
            name: "Dr. Juan Carlos",
            label: "Oftalmólogo",
            image: "/doctor_random.jpg",
        },
        {
            name: "Dra. María Fernanda",
            label: "Médico General",
            image: "/doctor_random.jpg",
        },
        {
            name: "Dr. Juan Felipe",
            label: "Otorrinolaringólogo",
            image: "/doctor_random.jpg",
        },
    ];
    return <CardPersonasSection persons={persons} />;
};

export default DoctorPersonsSection;
