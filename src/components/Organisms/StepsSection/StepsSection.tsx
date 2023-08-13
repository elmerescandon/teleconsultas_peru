import CardCellPhone from "@/components/Molecules/CardCellPhone/CardCellPhone";
import React from "react";

const StepsSection = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Regístrate",
            info: "Ingresa tu nombre completo, DNI y número telefónico.",
        },
        {
            stepNumber: 2,
            title: "Reserva tu cita",
            info: "Selecciona la fecha y hora con 24 horas de anticipación.",
        },
        {
            stepNumber: 3,
            title: "Realiza el pago",
            info: "Paga con tarjeta de crédito o débito.",
        },
    ];
    return (
        <div className="py-10 bg-brand-50">
            <div className="text-5xl pb-12 font-semibold px-48">
                ¡Empezar es sencillo!
            </div>
            <div className="flex justify-center gap-44">
                {steps.map((step, index) => {
                    return <CardCellPhone key={index} {...step} />;
                })}
            </div>
        </div>
    );
};

export default StepsSection;
