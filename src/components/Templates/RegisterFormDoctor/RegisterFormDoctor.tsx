"use client";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import RegisterDoctorGeneral from "@/components/Organisms/RegisterDoctorGeneral/RegisterDoctorGeneral";
import RegisterDoctorInformation from "@/components/Organisms/RegisterDoctorInformation/RegisterDoctorInformation";
import RegisterDoctorLocation from "@/components/Organisms/RegisterDoctorLocation/RegisterDoctorLocation";
import RegisterHeaders from "@/components/Organisms/RegisterHeaders/RegisterHeaders";
import { registerUser } from "@/firebase/User/addUser";
import IPosting from "@/utils/Interfaces/hooks/IPosting";
import { useDoctorRegisterState } from "@/utils/context/RegisterDoctorContext/RegisterDoctorContext";
import Routes from "@/utils/routes/Routes";
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
            route.push(Routes.REGISTER_DOCTOR_COMPLETE);
            setPosting({ loading: false, error: null });
        } catch (error) {
            setPosting({ loading: false, error: error as Error });
        }
    };

    return (
        <div className="w-1/2 flex flex-col justify-center m-auto h-fit py-14 max-xl:w-2/3 max-md:w-full">
            <RegisterHeaders
                currentStep={step}
                steps={["General", "Ubicación", "Certificaciones"]}
            />

            {!posting.loading && (
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
            {posting.loading && <LoadingCircle />}
            {posting.error && (
                <p className="text-lg text-rose-600 font-bold">
                    {posting.error.message}
                </p>
            )}
        </div>
    );
};

export default RegisterFormDoctor;
