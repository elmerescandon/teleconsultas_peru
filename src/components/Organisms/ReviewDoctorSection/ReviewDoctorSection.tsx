import CardComment from "@/components/Molecules/CardComment/CardComment";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const ReviewDoctorSection = () => {
    return (
        <div className="py-10">
            <div className="flex  justify-center items-center pb-7">
                <h1 className="w-1/2 text-center text-4xl font-semibold">
                    ¡Nuestros doctores confían en nosotros!
                </h1>
            </div>
            <div className="flex items-center gap-10 justify-center">
                <button className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center">
                    <ArrowLeftIcon className="w-10 h-10 text-brand-900" />
                </button>
                <div className="flex justify-center gap-24">
                    <CardComment
                        imagePath="/girl_smiling_v2.jpg"
                        name="Dr. Jorge Pérez"
                        comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
                    />
                    <CardComment
                        imagePath="/girl_smiling_v2.jpg"
                        name="Dra. Mariella Quispe"
                        comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
                    />
                    <CardComment
                        imagePath="/girl_smiling_v2.jpg"
                        name="Dra. Eva Coronado"
                        comment="MediConnect me ayudó a mejorar mi salud en todo momento todo lugar. ¡Recomendadísimo!"
                    />
                </div>
                <button className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center">
                    <ArrowRightIcon className="w-10 h-10 text-brand-900" />
                </button>
            </div>
        </div>
    );
};

export default ReviewDoctorSection;
