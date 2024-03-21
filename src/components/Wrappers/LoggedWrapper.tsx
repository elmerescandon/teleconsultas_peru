"use client";
import {useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import React from "react";
import LoadingFullPage from "../Molecules/Loaders/LoadingFullPage/LoadingFullPage";

type LoggedWrapperProps = {
  children: React.ReactNode;
};

const LoggedWrapper = ({children}: LoggedWrapperProps) => {
  const state: IUserState = useAppSelector((state) => state.user);
  return state.logged ? <div>{children}</div> : <LoadingFullPage />;
};

export default LoggedWrapper;
