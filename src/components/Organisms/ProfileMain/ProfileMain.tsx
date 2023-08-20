import { PencilIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

// TODO: Desglozarlo con props y componentes

const ProfileMain = () => {
    return (
        <div className="w-1/3 flex justify-center flex-col items-center gap-10 py-6">
            <div className="flex gap-4 flex-col items-center">
                <Image
                    src="/girl_smiling_v2.jpg"
                    height={200}
                    width={200}
                    alt="profile-main"
                    className="rounded-full"
                />
                <button className="flex gap-4 items-center -ml-6">
                    <PlusCircleIcon className="h-8 w-8 text-brand-600" />
                    <span className="text-brand-600 text-lg">Cambiar foto</span>
                </button>
            </div>
            <div className="flex flex-col w-full px-20 max-xl:w-auto max-xl:items-center">
                <div className="flex justify-start gap-20">
                    <p className="text-lg font-semibold">
                        Información Personal
                    </p>
                    <button>
                        <PencilIcon className="h-6 w-6 text-brand-600" />
                    </button>
                </div>
                <div className="flex flex-col gap-4 pt-5">
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Nombre(s) </p>
                        <p className="text-lg">Alvaro Pedro</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Apellidos(s) </p>
                        <p className="text-lg">Rodriguez Fernández</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">Correo(s) </p>
                        <p className="text-lg">alvaro.pedro@medicon</p>
                    </div>
                    <div className="flex justify-start max-xl:flex-col">
                        <p className="text-gray-500 w-36">DNI(s) </p>
                        <p className="text-lg">58479625</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMain;
