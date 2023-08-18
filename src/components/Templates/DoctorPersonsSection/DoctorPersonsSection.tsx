import CardPerson from "@/components/Molecules/CardPerson/CardPerson";
import Carrousel from "@/components/Organisms/Carrousel/Carrousel";
import React from "react";

const DoctorPersonsSection = () => {
    const persons = [
        <CardPerson
            key={0}
            imagePath="/doctor_random.jpg"
            label="Oftalmólogo"
            name="Dr. Juan Pedro"
        />,
        <CardPerson
            key={1}
            imagePath="/doctor_random.jpg"
            label="Oftalmólogo"
            name="Dr. Juan Carlos"
        />,
        <CardPerson
            key={2}
            imagePath="/doctor_random.jpg"
            label="Oftalmólogo"
            name="Dr. Juan Juanito"
        />,
    ];
    return (
        <div>
            <Carrousel items={persons} />
        </div>
    );
};

export default DoctorPersonsSection;
