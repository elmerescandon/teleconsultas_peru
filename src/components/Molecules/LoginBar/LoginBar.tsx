"use client";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import {getUser} from "@/firebase/User/getUser";
import {
  userLogIn,
  userLogOut,
} from "@/redux/action-creators/UserActionCreators";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import {dbToUser} from "@/utils/functions/utilsReducer";
import Routes from "@/utils/routes/Routes";
import {signOut, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import React, {useEffect, useState} from "react";
import LoginProfileMenu from "../LoginProfileMenu/LoginProfileMenu";

const LoginBar = () => {
  const [loaded, setLoaded] = useState(false);
  const state: IUserState = useAppSelector((state) => state.user);
  const {logged} = state;
  const dispatch = useAppDispatch();
  const {data: session, status} = useSession();

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
      setLoaded(true);
    };
    if (status === "authenticated") {
      getUserInfo(session.user!.name!);
    } else if (status === "loading") {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [status]);

  return (
    <div>
      {!loaded && (
        <div className="animate-pulse bg-gray-100 h-14 w-48 rounded-2xl "></div>
      )}
      {loaded &&
        (logged ? (
          <LoginProfileMenu />
        ) : (
          <div
            className="flex flex-row items-center justify-center gap-7 bg-brand-600 rounded-2xl px-5
                                max-2xl:gap-2 max-2xl:px-2"
          >
            <LinkPrimary to={Routes.LOGIN}>{"Iniciar Sesión"}</LinkPrimary>
            <LinkPrimary to={Routes.REGISTER}>{"Regístrate"}</LinkPrimary>
          </div>
        ))}
    </div>
  );
};

export default LoginBar;
