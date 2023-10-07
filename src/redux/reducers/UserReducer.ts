import { UserActionTypes } from "../action-types";
import { IUserActions } from "../actions/UserActions";
import IUserState from "../state-interfaces/User/IUserState";


export const initialState: IUserState = {
    logged: false,
    userInfo: {
        _id: "",
        id:"",
        role: "patient",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        profile_picture: "",
        active_prescriptions: [],
        reserved_appointments: undefined,
        region: "",
        province: "",
        district: "",
        reference: "",
        interiorNumber: "",
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
                userInfo: initialState,
            }
        default:
            return state;
    }
}

export default UserReducer;