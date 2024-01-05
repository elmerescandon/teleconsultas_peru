"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import useUserValidation from "@/utils/hooks/useUserValidation";
import { redirect, useRouter } from "next/navigation";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Routes from "@/utils/routes/Routes";
import { getUser } from "@/firebase/User/getUser";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import { dbToUser } from "@/utils/functions/utilsReducer";
import { useAppDispatch } from "@/redux/hooks";
import {
    userLogIn,
    userLogOut,
} from "@/redux/action-creators/UserActionCreators";

type LoginFormsProps = {
    role: string;
};

const LoginForms = ({ role }: LoginFormsProps) => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
        setIsDoctor,
    } = useUserValidation();

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();

    useEffect(() => {
        const getUserInfo = async (id: string) => {
            try {
                if (!id) throw new Error("No contiene información");
                const userDb = (await getUser(id)) as IUser;
                const user = dbToUser(userDb);
                dispatch(userLogIn(user));
                return user.role;
            } catch (err) {
                dispatch(userLogOut());
                signOut();
                router.push(Routes.HOME);
            }
        };

        role === "doctor" ? setIsDoctor(true) : setIsDoctor(false);

        if (status === "authenticated") {
            getUserInfo(session.user!.name!);
            const isDoctor = /doctor/.test(session.user!.name!);
            if (isDoctor) {
                router.push(Routes.DOCTOR_HOME);
            } else {
                router.push(Routes.PATIENT_HOME);
            }
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
            <div className="w-full">
                <div className="flex flex-col justify-start gap-10 items-center w-full">
                    <ButtonPrimary onClickFn={handleSubmit}>
                        Iniciar Sesión
                    </ButtonPrimary>
                    {loading && <Loading />}
                </div>
            </div>
            {error && <p className="text-rose-600 font-bold">{error}</p>}
        </div>
    );
};

export default LoginForms;
