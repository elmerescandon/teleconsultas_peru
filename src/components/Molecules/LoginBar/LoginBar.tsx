"use client";
import ButtonSecondary from "@/components/Atoms/Buttons/ButtonSecondary/ButtonSecondary";
import InputSelectSmall from "@/components/Atoms/Inputs/InputSelectSmall/InputSelectSmall";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import { getUser } from "@/firebase/User/getUser";
import {
    userLogIn,
    userLogOut,
} from "@/redux/action-creators/UserActionCreators";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { dbToUser } from "@/utils/functions/utilsReducer";
import Routes from "@/utils/routes/Routes";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoginProfilePicture from "../LoginProfilePicture/LoginProfilePicture";

const LoginBar = () => {
    const state: IUserState = useAppSelector((state) => state.user);
    const { logged, userInfo } = state;
    const { role } = userInfo;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();

    const [selectRole, setSelectRole] = useState("");

    useEffect(() => {
        const getUserInfo = async (id: string) => {
            try {
                if (!id) throw new Error("No contiene información");
                const userDb = await getUser(id);
                if (!userDb) return;
                const user = dbToUser(userDb);
                dispatch(userLogIn(user));
            } catch (err) {
                dispatch(userLogOut());
                signOut();
                redirect(Routes.HOME);
            }
        };
        if (status === "authenticated") {
            getUserInfo(session.user!.name!);
        }
    }, [status]);

    return (
        <div>
            {logged ? (
                <div className="login-bar flex flex-row items-center gap-7">
                    <button
                        className="text-lg font-semibold active:outline-none focus:outline-none "
                        onClick={() => {
                            if (role === "doctor")
                                router.push(Routes.DOCTOR_PROFILE);
                            else if (role === "patient")
                                router.push(Routes.PATIENT_PROFILE);
                            else router.push(Routes.HOME);
                        }}
                    >
                        <LoginProfilePicture />
                    </button>
                    <ButtonSecondary
                        onClickFn={() => {
                            dispatch(userLogOut());
                            signOut({
                                redirect: true,
                                callbackUrl: Routes.HOME,
                            });
                        }}
                    >
                        Cerrar Sesión
                    </ButtonSecondary>
                </div>
            ) : (
                <div className="login-bar flex flex-row items-center justify-center gap-7 bg-brand-600 rounded-2xl px-5">
                    <InputSelectSmall
                        onChange={(e) => {
                            setSelectRole(e);
                        }}
                        placeholder="Selecciona"
                        selectId="user-type"
                        options={[
                            { value: "patient", label: "Paciente" },
                            { value: "doctor", label: "Profesional" },
                        ]}
                    />

                    <LinkPrimary
                        to={
                            selectRole === "patient"
                                ? Routes.LOGIN_PATIENT
                                : selectRole === "doctor"
                                ? Routes.LOGIN_DOCTOR
                                : Routes.LOGIN
                        }
                    >
                        {"Iniciar Sesión"}
                    </LinkPrimary>
                    <LinkPrimary
                        to={
                            selectRole === "patient"
                                ? Routes.REGISTER_PATIENT
                                : selectRole === "doctor"
                                ? Routes.REGISTER_DOCTOR
                                : Routes.REGISTER
                        }
                    >
                        {"Regístrate"}
                    </LinkPrimary>
                </div>
            )}
        </div>
    );
};

export default LoginBar;
