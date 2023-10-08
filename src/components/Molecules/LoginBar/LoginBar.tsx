"use client";
import ButtonSecondary from "@/components/Atoms/Buttons/ButtonSecondary/ButtonSecondary";
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
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginBar = () => {
    const state: IUserState = useAppSelector((state) => state.user);
    const { logged, userInfo } = state;
    const { role } = userInfo;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();

    useEffect(() => {
        const getUserInfo = async (email: string) => {
            const userDb = await getUser(email);
            if (!userDb) return;
            const user = dbToUser(userDb);
            dispatch(userLogIn(user));
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
                        className="text-lg font-semibold"
                        onClick={() => {
                            if (role === "doctor")
                                router.push(Routes.DOCTOR_PROFILE);
                            else if (role === "patient")
                                router.push(Routes.PATIENT_PROFILE);
                            else router.push(Routes.HOME);
                        }}
                    >
                        <img
                            className="w-14 h-14 rounded-full"
                            src="/user-icon.jpg"
                        />
                    </button>
                    <ButtonSecondary
                        onClickFn={() => {
                            dispatch(userLogOut());
                            signOut({ redirect: false });
                            router.push(Routes.HOME);
                        }}
                    >
                        Cerrar Sesión
                    </ButtonSecondary>
                </div>
            ) : (
                <div className="login-bar flex flex-row items-center gap-7">
                    <LinkPrimary to={Routes.LOGIN}>
                        {"Iniciar Sesión"}
                    </LinkPrimary>
                    <LinkPrimary to={Routes.REGISTER}>
                        {"Regístrate"}
                    </LinkPrimary>
                </div>
            )}
        </div>
    );
};

export default LoginBar;
