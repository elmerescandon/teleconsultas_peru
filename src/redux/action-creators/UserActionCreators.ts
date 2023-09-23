"use client";
import { UserActionTypes } from "../action-types";
import IUserInfo from "../state-interfaces/User/IUserInfo";

export const userLogIn = (user: IUserInfo) => ({
    type: UserActionTypes.USER_LOGIN,
    payload: user,
});

export const userLogOut = () => ({
    type: UserActionTypes.USER_LOGOUT,
});
