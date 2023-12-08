import EspecialitiesMedicine from "@/components/Organisms/EspecialitiesMedicine/EspecialitiesMedicine";
import EspecialityMain from "@/components/Organisms/EspecialityMain/EspecialityMain";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <EspecialityMain
                title="Medicina General"
                subtitle="En Salufy sabemos que la salud mental es un componente esencial en la salud general, por eso nuestro compromiso y esfuerzo en impulsarlo."
                to={Routes.RESERVE}
                image={
                    <Image
                        src="/PSYCHO_IMAGE.png"
                        alt="salufy-nutri"
                        width={500}
                        height={500}
                    />
                }
                type="medicine"
            />
            <EspecialitiesMedicine />
            <PhoneSteps color="medicine" />
            {/* <ReviewDoctorSection /> */}
            <Footer />
        </div>
    );
};

export default page;
