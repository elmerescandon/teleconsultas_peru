import EspecialitiesMedicine from "@/components/Organisms/EspecialitiesMedicine/EspecialitiesMedicine";
import EspecialityMain from "@/components/Organisms/EspecialityMain/EspecialityMain";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <EspecialityMain
                title="Medicina General"
                subtitle="En Salufy, la medicina general es tu aliada para cultivar una vida plena y saludable; cada consulta es una inversión para tu bienestar integral en el corto y largo plazo."
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
        </div>
    );
};

export default page;
