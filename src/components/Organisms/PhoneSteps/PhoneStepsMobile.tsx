import PhoneStep from "@/components/Molecules/PhoneStep/PhoneStep";
import Image from "next/image";
import React from "react";

type PhoneStepsProps = {
    color: string;
};

const PhoneStepsMobile = ({ color }: PhoneStepsProps) => {
    let colorValue = "";
    switch (color) {
        case "normal":
            colorValue = "bg-brand-200";
            break;
        case "psychology":
            colorValue = "bg-salufy-psycho-light";
            break;
        case "nutrition":
            colorValue = "bg-salufy-nutri-light";
            break;
        default:
            colorValue = "bg-brand-200";
            break;
    }

    return (
        <div
            className={`flex flex-col ${colorValue} py-5 hidden 
                        max-xl:m-0 max-xl:rounded-none max-xl:px-5 
                        max-lg:block`}
        >
            <div className="flex w-full justify-end">
                <div className="flex flex-col items-start justify-center ">
                    <p
                        className="text-3xl text-salufy-gray font-semibold pb-5 text-right 
                                    max-lg:text-5xl
                                    max-md:text-3xl"
                    >
                        ¡Empezar es sencillo!
                    </p>
                    <div className="flex flex-col justify-end w-full items-end gap-5">
                        <PhoneStep number={1} title="Elige tu servicio" />
                        <PhoneStep number={2} title="Regístrate" />
                        <PhoneStep number={3} title="Agenda tu cita" />
                    </div>
                </div>
                <Image
                    src="/CELULAR_STEP_1.png"
                    alt="salufy-phone-steps"
                    className="max-lg:w-1/3 max-md:w-1/2 max-sm:w-1/2 max-xs:w-1/2"
                    width={350}
                    height={300}
                />
            </div>

            <div className="pt-3">
                <p
                    className="text-5xl font-semibold text-salufy-blue text-right
                               max-xl:text-3xl
                               max-md:pb-5"
                >
                    Agenda tu cita donde quieras cuando quieras
                </p>
                <p
                    className="text-md text-salufy-gray text-right font-semibold
                              max-md:pb-5"
                >
                    Salufy te conectar con profesionales de la salud en base a
                    tus necesidades y disponibilidad
                </p>
            </div>
        </div>
    );
};

export default PhoneStepsMobile;
