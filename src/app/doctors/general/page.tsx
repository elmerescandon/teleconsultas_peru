import CardInfo from "@/components/Atoms/Cards/CardInfo/CardInfo";
import LabelPrimary from "@/components/Atoms/Labels/LabelPrimary/LabelPrimary";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import Routes from "@/utils/routes/Routes";
import React from "react";

const page = () => {
    const specialityPhysical = [
        "Medicina General",
        "Endrocrinología",
        "Nutrición",
        "Cardiología",
        "Otorrinolaringología",
        "Ginecología",
        "Pediatría",
        "Dermatología",
        "Traumatología",
    ];
    return (
        <div>
            <Header />
            <div className="flex flex-col px-48">
                <h1 className="text-5xl font-semibold text-center py-10">
                    Doctores
                </h1>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap gap-5 items-center justify-center">
                        {specialityPhysical.map((speciality, index) => (
                            <LabelPrimary content={speciality} key={index} />
                        ))}
                    </div>
                    <div className="flex gap-5">
                        <CardInfo
                            text="Para el año 2011, el 70% de los médicos especialistas
                        registrados en Perú se encontraban laborando en Lima y
                        solo el 30% en otras regiones. Hasta el momento la
                        centralización del sistema de salud no ha cambiado
                        significativamente"
                        />

                        <CardInfo
                            text="Según declaraciones de Janice Sanfield, Directora
                        Ejecutiva de Videnza Consultores, en el CADE Ejecutivos
                        del 2021, “hay 14 médicos por cada 10 mil habitantes,
                        una de las cifras más bajas de Latinoamérica"
                        />

                        <CardInfo
                            text="En Salufy estamos comprometidos en 
                        revolucionar 
                        la forma en que los doctores 
                        se conectan con pacientes para brindarles una atención médica de calidad."
                        />

                        <CardInfo
                            text="Nuestra misión es facilitar el acceso a la atención
                        médica personalizada, brindando una plataforma en la que
                        los pacientes puedan encontrar doctores y horarios según
                        sus necesidades"
                        />
                    </div>
                </div>
                <div className="flex py-5">
                    <LinkPrimary to={Routes.RESERVE}>
                        {" "}
                        ¡Reserva tu cita!
                    </LinkPrimary>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default page;
