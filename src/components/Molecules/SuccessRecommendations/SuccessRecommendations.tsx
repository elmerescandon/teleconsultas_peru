import TextRecommendations from "@/components/Atoms/Texts/TextRecommendations/TextRecommendations";
import React from "react";

const SuccessRecommendations = () => {
    return (
        <div className="bg-brand-700 text-basic-white py-7 px-8 rounded-2xl">
            <div className="text-2xl font-semibold pb-3">Recomendaciones</div>
            <TextRecommendations text="No olvides conectarte a la plataforma virtual de tu cita agendada 15 minutos antes." />
            <TextRecommendations text="Recuerda que tu cita es virtual, por lo que debes tener una conexión a internet estable." />
            <TextRecommendations text="Ten a la mano tu DNI para que puedas identificarte con el profesional de salud." />
        </div>
    );
};

export default SuccessRecommendations;
