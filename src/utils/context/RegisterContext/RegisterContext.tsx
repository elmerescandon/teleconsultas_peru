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
        reference: "",
        interiorNumber: "",

        // Info
        age: "",
        sex: "",
        height: "",
        weight: "",
        phone: "",
        bornDate: "",
        termsAndConditions: "",
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
        case RegisterActions.SET_GENERAL:
            return { ...register, ...action.payload };
        case RegisterActions.SET_LOCATION:
            return { ...register, ...action.payload };
        case RegisterActions.SET_INFO:
            return { ...register, ...action.payload };
        default:
            return register;
    }
};

export const useRegisterState = () => {
    return useContext(RegisterContext);
};

export const useRegisterDispatch = () => {
    return useContext(RegisterDispatchContext);
};

export default RegisterProvider;
