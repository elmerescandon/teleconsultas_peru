"use client";
import LoadingCircle from "@/components/Molecules/LoadingCircle/LoadingCircle";
import RegisterGeneral from "@/components/Organisms/RegisterGeneral/RegisterGeneral";
import RegisterHeaders from "@/components/Organisms/RegisterHeaders/RegisterHeaders";
import RegisterInformation from "@/components/Organisms/RegisterInformation/RegisterInformation";
import RegisterLocation from "@/components/Organisms/RegisterLocation/RegisterLocation";
import { registerUser } from "@/firebase/User/addUser";
import IPosting from "@/utils/Interfaces/hooks/IPosting";
import { useRegisterState } from "@/utils/context/RegisterContext/RegisterContext";
import Routes from "@/utils/routes/Routes";
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

    const postUser = async () => {
        setPosting({ loading: true, error: null });
        try {
            if (!(await registerUser(formState, role)))
                throw new Error(
                    "Error al registrar. El email o DNI ya existe, intente de nuevo."
                );
            route.push(Routes.REGISTER_COMPLETE);
            setPosting({ loading: false, error: null });
        } catch (error) {
            setPosting({ loading: false, error: error as Error });
        }
    };

    return (
        <div className="w-1/2 flex flex-col justify-center m-auto h-fit py-14 max-xl:w-2/3 max-md:w-full">
            <RegisterHeaders
                currentStep={step}
                steps={["General", "Ubicación", "Información"]}
            />

            {!posting.loading && (
                <div className="pb-3 flex flex-col justify-start">
                    {step === 1 && (
                        <RegisterGeneral
                            role={role}
                            nextFn={() => {
                                setStep(step + 1);
                            }}
                        />
                    )}
                    {step === 2 && (
                        <RegisterLocation
                            role={role}
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
                                postUser();
                            }}
                        />
                    )}
                </div>
            )}
            {posting.loading && <LoadingCircle />}
            {posting.error && (
                <p className="text-lg text-rose-600 font-bold">
                    {posting.error.message}
                </p>
            )}
        </div>
    );
};

export default RegisterForm;
