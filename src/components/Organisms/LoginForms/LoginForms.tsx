"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import useUserValidation from "@/utils/hooks/useUserValidation";
import { useRouter } from "next/navigation";
import Loading from "@/components/Molecules/Loading/Loading";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Routes from "@/utils/routes/Routes";

const LoginForms = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
    } = useUserValidation();

    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.push(Routes.PATIENT_HOME);
        }
    }, [status]);

    return (
        <div className="flex flex-col items-center gap-6">
            <InputText
                placeholder="Correo electrónico"
                value={username}
                onChangeFn={setUsername}
            />
            <InputText
                type="password"
                placeholder="Contraseña"
                value={password}
                onChangeFn={setPassword}
            />
            <div className="flex flex-col justify-start gap-10 items-center w-full">
                <ButtonPrimary onClickFn={handleSubmit}>
                    Iniciar Sesión
                </ButtonPrimary>
                {loading && <Loading />}
            </div>

            {error && <p className="text-rose-600 font-bold">{error}</p>}
        </div>
    );
};

export default LoginForms;
