"use client";
import { UserActionTypes } from "../action-types";
import IUserInfo from "../state-interfaces/User/IUserInfo";

export const userLogIn = (use: IUserInfo) => ({
    type: UserActionTypes.USER_LOGIN,
    payload: use,
});

export const userLogOut = () => ({
    type: UserActionTypes.USER_LOGOUT,
});
