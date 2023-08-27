import { UserActionTypes } from "../action-types";
import IUserInfo from "../state-interfaces/User/IUserInfo";

interface LogInUserAction{
    type: UserActionTypes.USER_LOGIN,
    payload: IUserInfo
} 

interface LogOutUserAction{
    type: UserActionTypes.USER_LOGOUT,
}

export type IUserActions = LogInUserAction | LogOutUserAction;