import { Dispatch, createContext, useContext, useReducer } from "react";
import { IRegisterDoctorActions } from "../Interfaces/reducers/IRegisterAction";

enum RegisterActions {
    SET_GENERAL = "SET_GENERAL",
    SET_LOCATION = "SET_LOCATION",
    SET_DOCINFO = "SET_DOCINFO",
}

export const RegisterDoctorContext = createContext<IRegisterDoctor>(undefined!);
export const RegisterDispatchContext = createContext<
    Dispatch<IRegisterDoctorActions>
>(undefined!);

type RegisterProviderProps = {
    children: React.ReactNode;
};

const DoctorRegisterProvider = ({ children }: RegisterProviderProps) => {
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

        // Doc Info
        age: "",
        sex: "",
        specialities: [],
        cmpNumber: "",
        curriculum: "",
        phone: "",
        termsAndConditions: "",
    });

    return (
        <RegisterDoctorContext.Provider value={register}>
            <RegisterDispatchContext.Provider value={dispatch}>
                {children}
            </RegisterDispatchContext.Provider>
        </RegisterDoctorContext.Provider>
    );
};

const registerReducer = (
    register: IRegisterDoctor,
    action: IRegisterDoctorActions
) => {
    switch (action.type) {
        case RegisterActions.SET_GENERAL:
            return { ...register, ...action.payload };
        case RegisterActions.SET_LOCATION:
            return { ...register, ...action.payload };
        case RegisterActions.SET_DOCINFO:
            return { ...register, ...action.payload };
        default:
            return register;
    }
};

export const useDoctorRegisterState = () => {
    return useContext(RegisterDoctorContext);
};

export const useDoctorRegisterDispatch = () => {
    return useContext(RegisterDispatchContext);
};

export default DoctorRegisterProvider;
