"use client";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import LoadingFullPage from "@/components/Molecules/Loaders/LoadingFullPage/LoadingFullPage";
import RegisterDoctorGeneral from "@/components/Organisms/RegisterDoctorGeneral/RegisterDoctorGeneral";
import RegisterDoctorInformation from "@/components/Organisms/RegisterDoctorInformation/RegisterDoctorInformation";
import RegisterDoctorLocation from "@/components/Organisms/RegisterDoctorLocation/RegisterDoctorLocation";
import RegisterHeaders from "@/components/Organisms/RegisterHeaders/RegisterHeaders";
import { registerUser } from "@/firebase/User/addUser";
import IPosting from "@/utils/Interfaces/hooks/IPosting";
import { useDoctorRegisterState } from "@/utils/context/RegisterDoctorContext/RegisterDoctorContext";
import Routes from "@/utils/routes/Routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterFormDoctor = () => {
    const [step, setStep] = useState(1);
    const formState = useDoctorRegisterState();
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
                    "doctor"
                ))
            )
                throw new Error(
                    "Error al registrar. El email o DNI ya existe, intente de nuevo."
                );
            console.log(formState);
            setPosting({ loading: false, error: null });
            setCorrect(true);
            route.push(Routes.REGISTER_DOCTOR_COMPLETE);
        } catch (error) {
            setPosting({ loading: false, error: error as Error });
        }
    };

    return (
        <div
            className="w-1/2 flex flex-col justify-center m-auto
                        max-xl:w-2/3 max-md:w-full  max-xl:h-full"
        >
            {!posting.loading && !correct && (
                <RegisterHeaders
                    currentStep={step}
                    steps={["General", "Ubicación", "Certificaciones"]}
                />
            )}

            {!posting.loading && !correct && (
                <div className="pb-3 flex flex-col justify-start">
                    {step === 1 && <RegisterDoctorGeneral nextFn={nextStep} />}
                    {step === 2 && (
                        <RegisterDoctorLocation
                            prevFn={prevStep}
                            nextFn={nextStep}
                        />
                    )}
                    {step === 3 && (
                        <RegisterDoctorInformation
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

export default RegisterFormDoctor;
