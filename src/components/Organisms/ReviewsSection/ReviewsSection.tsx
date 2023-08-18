import CardComment from "@/components/Molecules/CardComment/CardComment";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Carrousel from "../Carrousel/Carrousel";

const ReviewsSection = () => {
    const comments = [
        <CardComment
            key={0}
            imagePath={"/girl_smiling_v2.jpg"}
            name="Mariella, 25"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
        <CardComment
            key={1}
            imagePath={"/girl_smiling_v2.jpg"}
            name="Mariella, 26"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
        <CardComment
            key={2}
            imagePath={"/girl_smiling_v2.jpg"}
            name="Mariella, 27"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
    ];
    return (
        <div className="py-10">
            <div className="flex  justify-center items-center pb-7">
                <h1 className="w-1/2 text-center text-4xl font-semibold">
                    Algunos testimonios de clientes que han confiado en nosotros
                </h1>
            </div>
            <Carrousel items={comments} />
        </div>
    );
};

export default ReviewsSection;
