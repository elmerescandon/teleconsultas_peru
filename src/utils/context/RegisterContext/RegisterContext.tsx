import { Dispatch, createContext, useContext, useReducer } from "react";
import IRegisterActions from "@/utils/Interfaces/reducers/IRegisterAction";

enum RegisterActions {
    SET_GENERAL = "SET_GENERAL",
    SET_LOCATION = "SET_LOCATION",
    SET_INFO = "SET_INFO",
}

export const RegisterContext = createContext<IRegister>(undefined!);
export const RegisterDispatchContext = createContext<
    Dispatch<IRegisterActions>
>(undefined!);

type RegisterProviderProps = {
    children: React.ReactNode;
};

const RegisterProvider = ({ children }: RegisterProviderProps) => {
    const [register, dispatch] = useReducer(registerReducer, {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        id: "",

        // location
        region: "",
        province: "",
        district: "",
        address: "",
        refference: "",
        interiorNumber: "",

        // Info
        age: "",
        height: "",
        weight: "",
        phone: "",
        bornDate: "",
    });

    return (
        <RegisterContext.Provider value={register}>
            <RegisterDispatchContext.Provider value={dispatch}>
                {children}
            </RegisterDispatchContext.Provider>
        </RegisterContext.Provider>
    );
};

const registerReducer = (register: IRegister, action: IRegisterActions) => {
    switch (action.type) {
        case "SET_GENERAL":
            return { ...register, ...action.payload };
        case "SET_LOCATION":
            return { ...register, ...action.payload };
        case "SET_INFO":
            return { ...register, ...action.payload };
        default:
            return register;
    }
};

export const useAppointment = () => {
    return useContext(RegisterContext);
};

export const useAppointmentDispatch = () => {
    return useContext(RegisterDispatchContext);
};

export const registerGeneral = (forms: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    id: string;
}) => ({
    type: RegisterActions.SET_GENERAL,
    payload: forms,
});

export const registerLocation = (forms: {
    region: string;
    province: string;
    district: string;
    address: string;
    refference: string;
    interiorNumber: string;
}) => ({
    type: RegisterActions.SET_LOCATION,
    payload: forms,
});

export const registerInfo = (forms: {
    age: string;
    height: string;
    weight: string;
    phone: string;
    bornDate: string;
}) => ({
    type: RegisterActions.SET_INFO,
    payload: forms,
});

export default RegisterProvider;
