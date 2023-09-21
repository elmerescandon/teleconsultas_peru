"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import RegisterGeneral from "@/components/Organisms/RegisterGeneral/RegisterGeneral";
import RegisterInformation from "@/components/Organisms/RegisterInformation/RegisterInformation";
import RegisterLocation from "@/components/Organisms/RegisterLocation/RegisterLocation";
import { useRegisterState } from "@/utils/context/RegisterContext/RegisterContext";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [validRegister, setValidRegister] = useState<boolean>(false);
    const router = useRouter();
    const formsState = useRegisterState();

    useEffect(() => {
        if (validRegister) {
        }
    }, [formsState]);

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
                {step === 1 && (
                    <RegisterGeneral
                        nextFn={() => {
                            setStep(step + 1);
                        }}
                    />
                )}
                {step === 2 && (
                    <RegisterLocation
                        prevFn={() => {
                            setStep(step - 1);
                        }}
                        nextFn={() => {
                            setStep(step + 1);
                        }}
                    />
                )}
                {step === 3 && (
                    <RegisterInformation
                        prevFn={() => {
                            setStep(step - 1);
                        }}
                        nextFn={() => {
                            setValidRegister(true);
                            // router.push(Routes.REGISTER_COMPLETE);
                            // console.log(formsState);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default RegisterForm;
