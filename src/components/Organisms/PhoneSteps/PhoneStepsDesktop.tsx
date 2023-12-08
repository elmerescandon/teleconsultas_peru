import PhoneStep from "@/components/Molecules/PhoneStep/PhoneStep";
import Image from "next/image";
import React from "react";

type PhoneStepsDestkopProps = {
    color: string;
};

const PhoneStepsDestkop = ({ color }: PhoneStepsDestkopProps) => {
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
            className={`flex justify-center py-5 my-5 ${colorValue} items-center mr-48 rounded-r-3xl 
                        max-2xl:mr-20 
                        max-lg:hidden`}
        >
            <div>
                <p className="text-5xl font-semibold text-salufy-blue text-right pb-5">
                    Agenda tu cita donde quieras, cuando quieras
                </p>
                <p className="text-xl text-salufy-gray text-right pb-5">
                    Salufy te conectar con profesionales de la salud en base a
                    tus necesidades y disponibilidad
                </p>
                <div className="w-full">
                    <p className="text-5xl text-salufy-gray font-semibold pb-5 text-right">
                        ¡Empezar es sencillo!
                    </p>
                    <div className="flex flex-col justify-end w-full items-end gap-5">
                        <PhoneStep number={1} title="Elige tu servicio" />
                        <PhoneStep number={2} title="Regístrate" />
                        <PhoneStep number={3} title="Agenda tu cita" />
                    </div>
                </div>
            </div>
            <Image
                src="/CELULAR_STEP_1.png"
                alt="salufy-phone-steps"
                width={350}
                height={300}
            />
        </div>
    );
};

export default PhoneStepsDestkop;
