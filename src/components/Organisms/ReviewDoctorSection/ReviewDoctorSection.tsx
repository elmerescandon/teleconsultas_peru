import CardComment from "@/components/Molecules/CardComment/CardComment";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Carrousel from "../Carrousel/Carrousel";

const ReviewDoctorSection = () => {
    const doctorReviews = [
        <CardComment
            imagePath="/girl_smiling_v2.jpg"
            name="Dr. Jorge Pérez"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
        <CardComment
            imagePath="/girl_smiling_v2.jpg"
            name="Dra. Mariella Quispe"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
        <CardComment
            imagePath="/girl_smiling_v2.jpg"
            name="Dra. Eva Coronado"
            comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
        />,
    ];
    return (
        <div className="py-10 px-4">
            <div className="flex  justify-center items-center pb-7">
                <h1 className="w-1/2 text-center text-4xl font-semibold">
                    ¡Nuestros doctores confían en nosotros!
                </h1>
            </div>
            <Carrousel items={doctorReviews} />
        </div>
    );
};

export default ReviewDoctorSection;
