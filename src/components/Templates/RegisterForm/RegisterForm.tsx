"use client";
import LoadingCircle from "@/components/Molecules/LoadingCircle/LoadingCircle";
import RegisterGeneral from "@/components/Organisms/RegisterGeneral/RegisterGeneral";
import RegisterInformation from "@/components/Organisms/RegisterInformation/RegisterInformation";
import RegisterLocation from "@/components/Organisms/RegisterLocation/RegisterLocation";
import { registerUser } from "@/firebase/User/addUser";
import IPosting from "@/utils/Interfaces/hooks/IPosting";
import { useRegisterState } from "@/utils/context/RegisterContext/RegisterContext";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegisterForm = () => {
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
            if (!(await registerUser(formState, "patient")))
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

            {!posting.loading && (
                <div className="pb-3 flex flex-col justify-start">
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
