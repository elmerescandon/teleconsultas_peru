"use client";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import RegisterGeneral from "@/components/Organisms/RegisterGeneral/RegisterGeneral";
import RegisterHeaders from "@/components/Organisms/RegisterHeaders/RegisterHeaders";
import RegisterInformation from "@/components/Organisms/RegisterInformation/RegisterInformation";
import RegisterLocation from "@/components/Organisms/RegisterLocation/RegisterLocation";
import { registerUser } from "@/firebase/User/addUser";
import IPosting from "@/utils/Interfaces/hooks/IPosting";
import { useRegisterState } from "@/utils/context/RegisterContext/RegisterContext";
import Routes from "@/utils/routes/Routes";
import next from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type RegisterFormProps = {
    role: "doctor" | "patient";
};

const RegisterForm = ({ role }: RegisterFormProps) => {
    const [step, setStep] = useState(1);
    const formState = useRegisterState();
    const route = useRouter();
    const [posting, setPosting] = useState<IPosting>({
        loading: false,
        error: null,
    });

    const [correct, setCorrect] = useState(false);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const postUser = async () => {
        setPosting({ loading: true, error: null });
        try {
            if (
                !(await registerUser(
                    formState as IRegister & IRegisterDoctor,
                    role
                ))
            )
                throw new Error(
                    "Error al registrar. El email o DNI ya existe, intente de nuevo."
                );
            setPosting({ loading: false, error: null });
            setCorrect(true);
            route.push(Routes.REGISTER_PATIENT_COMPLETE);
        } catch (error) {
            setPosting({ loading: false, error: error as Error });
        }
    };

    return (
        <div className="w-1/2 flex flex-col justify-center m-auto h-fit py-14 max-xl:w-2/3 max-md:w-full">
            {!posting.loading && !correct && (
                <RegisterHeaders
                    currentStep={step}
                    steps={["General", "Ubicación", "Información"]}
                />
            )}

            {!posting.loading && !correct && (
                <div className="pb-3 flex flex-col justify-start">
                    {step === 1 && <RegisterGeneral nextFn={nextStep} />}
                    {step === 2 && (
                        <RegisterLocation
                            role={role}
                            prevFn={prevStep}
                            nextFn={nextStep}
                        />
                    )}
                    {step === 3 && (
                        <RegisterInformation
                            prevFn={prevStep}
                            nextFn={() => {
                                postUser();
                            }}
                        />
                    )}
                </div>
            )}
            {posting.loading && !correct && (
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <Image
                        className="pt-5"
                        src="/LOGO_SALUFY.png"
                        width={100}
                        height={200}
                        alt="logo-loader"
                    />
                    <p className="text-2xl font-bold text-brand-600">
                        Registrando usuario
                    </p>
                    <p className="text-lg font-bold text-brand-600 pb-5">
                        Espere por favor...
                    </p>
                    <Loading />
                </div>
            )}
            {posting.error && (
                <p className="text-lg text-rose-600 font-bold">
                    {posting.error.message}
                </p>
            )}
            {correct && (
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <Image
                        className="pt-5"
                        src="/LOGO_SALUFY.png"
                        width={100}
                        height={200}
                        alt="logo-loader"
                    />
                    <p className="text-2xl font-bold text-brand-600">
                        Registro exitoso
                    </p>
                    <p className="text-lg font-bold text-brand-600 pb-5">
                        Redirigiendo...
                    </p>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default RegisterForm;
