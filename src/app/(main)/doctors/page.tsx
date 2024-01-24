import EspecialityInformation from "@/components/Organisms/EspecialityInformation/EspecialityInformation";
import PhoneSteps from "@/components/Organisms/PhoneSteps/PhoneSteps";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";

const Doctors = () => {
    const featureMedicine = [
        "Elige la especialidad que necesitas y agenda tu cita.",
        "Encuentra el horario que mejor te acomode de forma fácil y rápida.",
        "Realiza el pago de forma segura a través de Mercado Pago.",
    ];

    const featureMental = [
        "Encuentra al especialista que necesitas para tratar depresión, ansiedad, estrés, entre otros.",
        "Encuentra el horario que mejor te acomode de forma fácil y rápida.",
        "Realiza el pago de forma segura a través de Mercado Pago.",
    ];

    const featureNutrition = [
        "Cambia o mejora tus hábitos alimenticios a través de un plan según tus necesidades.",
        "Encuentra el horario que mejor te acomode de forma fácil y rápida.",
        "Realiza el pago de forma segura a través de Mercado Pago.",
    ];

    return (
        <div>
            <div
                className="flex flex-row justify-center w-full gap-16 flex-wrap py-10 
                            max-xl:flex-col max-xl:px-16 max-xl:pt-28 max-xl:items-center"
            >
                <EspecialityInformation
                    color="normal"
                    image={
                        <Image
                            src="/GENERAL_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureMedicine}
                    more={Routes.DOCTORS_GENERAL}
                    reserve={Routes.RESERVE}
                    title="Medicina General"
                />

                <EspecialityInformation
                    color="psychology"
                    image={
                        <Image
                            src="/PSYCHO_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureMental}
                    more={Routes.DOCTORS_PSYCHOLOGISTS}
                    reserve={Routes.RESERVE}
                    title="Psicología"
                />

                <EspecialityInformation
                    color="nutrition"
                    image={
                        <Image
                            src="/NUTRI_IMAGE.png"
                            alt="salufy-general-image"
                            width={500}
                            height={500}
                        />
                    }
                    items={featureNutrition}
                    more={Routes.DOCTORS_NUTRITIONISTS}
                    reserve={Routes.RESERVE}
                    title="Nutrición"
                />
            </div>
            <PhoneSteps color="normal" />
        </div>
    );
};

export default Doctors;
