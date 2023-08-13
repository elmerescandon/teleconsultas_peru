import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
    CheckIcon,
    HeartIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const EspecialitySection = () => {
    return (
        <div className="bg-brand-50 px-40 py-10">
            <div className="text-5xl font-semibold pb-7">
                Conoce más sobre nuestras especialidades
            </div>
            <div className="flex flex-row justify-center w-full gap-7">
                <div className="flex flex-col flex-grow items-center rounded-3xl bg-brand-100 py-5 gap-3 w-1/2">
                    <LightBulbIcon className="w-16 h-16 text-brand-900" />
                    <div className="text-4xl font-semibold">Salud Mental</div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Agenda en todo momento
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Escoge tu terapista de preferencia
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Paga con el método de pago de tu preferencia
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 py-5">
                        <div className="text-xl font-semibold">
                            Nos desempeñamos en...
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Psicología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Psiquiatría
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Coaching y Motivación
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow items-center bg-brand-100 rounded-3xl py-5 gap-3 w-1/2">
                    <HeartIcon className="w-16 h-16 text-brand-900" />
                    <div className="text-4xl font-semibold">Salud física</div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Agenda en todo momento
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Revisa tus recetas en línea
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Paga con el método de pago de tu preferencia
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <ArrowRightIcon className="w-8 h-8" />
                            <div className="text-lg">
                                Consulta tu historial médico
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 py-5 px-10">
                        <div className="text-xl font-semibold">
                            Nos desempeñamos en...
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Medicina General
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Endrocrinología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Nutrición
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Cardiología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Otorrinolaringología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Ginecología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Pediatría
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Dermatología
                            </div>
                            <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
                                Traumatología
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EspecialitySection;
