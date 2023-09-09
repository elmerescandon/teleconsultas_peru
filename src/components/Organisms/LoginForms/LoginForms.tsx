"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import { userLogIn } from "@/redux/action-creators/UserActionCreators";
import { useAppDispatch } from "@/redux/hooks";
import useUserValidation from "@/utils/hooks/useUserValidation";
import doctorMockup from "@/utils/mockups/doctorMockup";
import patientReduxMockup from "@/utils/mockups/patientReduxMockup";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForms = () => {
    const { validateUser } = useUserValidation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleSubmit = async () => {
        try {
            await validateUser(username, password);
            setError("");
            if (username === "doctor123" && password === "doctor123") {
                dispatch(userLogIn(doctorMockup));
                router.push(Routes.DOCTOR_HOME);
                return;
            }
            dispatch(userLogIn(patientReduxMockup));
            router.push(Routes.PATIENT_HOME);
            // Continue with further actions, such as registering the user
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <InputText
                placeholder="Usuario o Correo electrónico"
                value={username}
                onChangeFn={setUsername}
            />
            <InputText
                type="password"
                placeholder="Contraseña"
                value={password}
                onChangeFn={setPassword}
            />
            <ButtonPrimary onClickFn={handleSubmit}>
                Iniciar Sesión
            </ButtonPrimary>
            {error && <p className="text-rose-600 font-bold">{error}</p>}
        </div>
    );
};

export default LoginForms;
