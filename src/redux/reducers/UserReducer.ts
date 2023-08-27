import { UserActionTypes } from "../action-types";
import { IUserActions } from "../actions/UserActions";
import IUserState from "../state-interfaces/User/IUserState";


export const initialState: IUserState = {
    logged: false,
    userInfo: {
        _id: "",
        role: "patient",
        name: "",
        email: "",
        phone: "",
        address: "",
        profile_picture: "",
    },
};

const UserReducer = (
    state: IUserState = initialState,
    action : IUserActions,
) => {
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return {
                ...state,
                logged: true,
                userInfo: action.payload
            };
        case UserActionTypes.USER_LOGOUT:
            return{
                ...state, 
                logged: false,
                userInfo: {
                    _id: "",
                    role: "patient",
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    profile_picture: "",
                },
            }
        default:
            return state;
    }
}

export default UserReducer;