import Image from "next/image";
import React from "react";

const PatientMain = () => {
    return (
        <div className="flex justify-between w-full items-center rounded-3xl border-neutral-300 border-2 py-10 px-24">
            <div className="flex flex-col gap-5">
                <p className="text-sm font-normal">
                    Lunes, 01 de Agosto 2023 | 2:23PM
                </p>
                <p className="text-3xl font-semibold">¡Buenos días, Alvaro!</p>
                <p className="text-base font-normal">
                    Tienes 1 cita agendada para hoy
                </p>
            </div>
            <Image
                src="/girl_smiling_v2.jpg"
                height={150}
                width={150}
                alt="telemedicine-profile-person"
                className="rounded-full"
            />
        </div>
    );
};

export default PatientMain;
