"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import RegisterGeneral from "@/components/Organisms/RegisterGeneral/RegisterGeneral";
import RegisterInformation from "@/components/Organisms/RegisterInformation/RegisterInformation";
import RegisterLocation from "@/components/Organisms/RegisterLocation/RegisterLocation";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
    // TODO: Add user validation functions
    const [step, setStep] = useState(1);
    const router = useRouter();

    return (
        <div className="w-1/2 flex flex-col justify-center m-auto h-fit py-10 max-xl:w-2/3 max-md:w-full">
            <div className="flex flex-row items-center justify-center gap-36 pb-10">
                <p
                    className={`text-3xl font-semibold ${
                        step === 1
                            ? "text-basic-black font-semibold max-xl:block"
                            : "text-neutral-300 max-xl:hidden"
                    }`}
                >
                    Registro
                </p>
                <p
                    className={`text-3xl ${
                        step === 2
                            ? "text-basic-black font-semibold max-xl:block"
                            : "text-neutral-300 max-xl:hidden"
                    }`}
                >
                    Ubicacion
                </p>
                <p
                    className={`text-3xl ${
                        step === 3
                            ? "text-basic-black font-semibold max-xl:block"
                            : "text-neutral-300 max-xl:hidden"
                    }`}
                >
                    Informacion
                </p>
            </div>

            <div className="pb-10 flex flex-col justify-start">
                {step === 1 && <RegisterGeneral />}
                {step === 2 && <RegisterLocation />}
                {step === 3 && <RegisterInformation />}
                <div className="w-48 m-10 flex gap-10 max-xl:w-full">
                    <div className={`${step === 1 ? "hidden" : ""}`}>
                        <ButtonPrimary
                            onClickFn={() => {
                                setStep(step - 1);
                            }}
                        >
                            Anterior
                        </ButtonPrimary>
                    </div>

                    <div className={`${step === 3 ? "hidden" : ""}`}>
                        <ButtonPrimary
                            onClickFn={() => {
                                setStep(step + 1);
                            }}
                        >
                            Siguiente
                        </ButtonPrimary>
                    </div>
                    <div className={`${step !== 3 ? "hidden" : ""}`}>
                        <ButtonPrimary
                            onClickFn={() => {
                                router.push(Routes.REGISTER_COMPLETE);
                            }}
                        >
                            Finalizar
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
