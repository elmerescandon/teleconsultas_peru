import IUser from "@/utils/Interfaces/dataModel/IUser";
import { UserActionTypes } from "../action-types";

interface LogInUserAction{
    type: UserActionTypes.USER_LOGIN,
    payload: IUser
} 

interface LogOutUserAction{
    type: UserActionTypes.USER_LOGOUT,
}

export type IUserActions = LogInUserAction | LogOutUserAction;